﻿using System;
using DigitalRune.Graphics;
using DigitalRune.Graphics.Effects;
using Microsoft.Xna.Framework;
using Microsoft.Xna.Framework.Content;
using Microsoft.Xna.Framework.Graphics;
using Sceelix.Designer.Actors.Annotations;
using Sceelix.Designer.Actors.Utils;
using Sceelix.Designer.Renderer3D.Loading;
using Sceelix.Designer.Services;
using Sceelix.Designer.Utils;
using Sceelix.Mathematics.Data;
using Sceelix.Surfaces.Data;
using Sceelix.Surfaces.Extensions;
using Sceelix.Surfaces.Materials;
using Material = Sceelix.Actors.Data.Material;


namespace Sceelix.Designer.Surfaces.Translators.Materials
{
    [MaterialTranslator(typeof(SingleTextureSurfaceMaterial))]
    public class SingleTextureSurfaceMaterialTranslator : SurfaceMaterialTranslator<VertexPositionNormalTexture>
    {
        private const float ReferenceAlpha = 0.5f;

        private ContentManager _content;
        private IGraphicsService _graphicsService;


        public override void Initialize(IServiceLocator services)
        {
            base.Initialize(services);

            _content = services.Get<ContentManager>();
            _graphicsService = services.Get<IGraphicsService>();
        }


        protected override Func<Coordinate, VertexPositionNormalTexture?> GetPrepareVertexFunc(SurfaceEntity surfaceEntity, Material sceelixMaterial)
        {
            var heightLayer = surfaceEntity.GetLayer<HeightLayer>();
            var normalsLayer = surfaceEntity.GetLayer<NormalLayer>();

            var singleTextureSurfaceMaterial = (SingleTextureSurfaceMaterial) sceelixMaterial;

            return (coordinate) =>
            {
                VertexPositionNormalTexture customVertex = new VertexPositionNormalTexture();

                customVertex.Position = (heightLayer != null ? heightLayer.GetPosition(coordinate) : surfaceEntity.CalculateFlatPosition(coordinate)).ToVector3();
                customVertex.Normal = (normalsLayer != null ? normalsLayer.GetGenericValue(coordinate) : heightLayer.CalculateNormal(coordinate)).ToVector3();
                customVertex.TextureCoordinate = surfaceEntity.CalculateUV(coordinate, singleTextureSurfaceMaterial.UVTiling, new Vector2D(0, 0), false, true).ToVector2();
                
                return customVertex;
            };
        }



        protected override DigitalRune.Graphics.Material CreateMaterial(ContentLoader contentLoader, Material sceelixMaterial)
        {
            var textureMaterial = (SingleTextureSurfaceMaterial) sceelixMaterial;

            Texture2D texture = contentLoader.LoadTexture(textureMaterial.Texture);


            DigitalRune.Graphics.Material material = new DigitalRune.Graphics.Material();

            BasicEffectBinding basicEffectBinding = new BasicEffectBinding(_graphicsService, null) {LightingEnabled = true, TextureEnabled = true, VertexColorEnabled = false};
            basicEffectBinding.Set("Texture", texture);
            material.Add("Default", basicEffectBinding);

            if (BuildPlatform.IsWindows)
            {
                EffectBinding shadowMapEffectBinding = new EffectBinding(_graphicsService, _content.Load<Effect>("DigitalRune/Materials/ShadowMapAlphaTest"), null, EffectParameterHint.Material);
                shadowMapEffectBinding.Set("DiffuseTexture", texture);
                shadowMapEffectBinding.Set("ReferenceAlpha", ReferenceAlpha);
                //shadowMapEffectBinding.Set("ScaleAlphaToCoverage", true);
                material.Add("ShadowMap", shadowMapEffectBinding);

                // EffectBinding for the "GBuffer" pass.
                EffectBinding gBufferEffectBinding = new EffectBinding(_graphicsService, _content.Load<Effect>("DigitalRune/Materials/GBufferAlphaTest"), null, EffectParameterHint.Material);
                gBufferEffectBinding.Set("DiffuseTexture", texture);
                gBufferEffectBinding.Set("SpecularPower", 100f);
                gBufferEffectBinding.Set("ReferenceAlpha", ReferenceAlpha);
                material.Add("GBuffer", gBufferEffectBinding);

                // EffectBinding for the "Material" pass.
                EffectBinding materialEffectBinding = new EffectBinding(_graphicsService, _content.Load<Effect>("DigitalRune/Materials/MaterialAlphaTest"), null, EffectParameterHint.Material);
                materialEffectBinding.Set("DiffuseTexture", texture);
                materialEffectBinding.Set("DiffuseColor", new Vector3(1, 1, 1)); //  * 2f
                //materialEffectBinding.Set("SpecularColor", new Vector3(0.2f, 0.2f, 0.2f));
                basicEffectBinding.Set("SpecularColor", new Vector3(0, 0, 0));
                materialEffectBinding.Set("ReferenceAlpha", ReferenceAlpha);
                material.Add("Material", materialEffectBinding);
            }

            return material;
        }
    }
}