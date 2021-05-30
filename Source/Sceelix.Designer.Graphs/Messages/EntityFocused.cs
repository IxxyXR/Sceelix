﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Sceelix.Core.Data;

namespace Sceelix.Designer.Graphs.Messages
{
    public class EntityFocused
    {
        private readonly IEntity _entity;
        private readonly string _location;



        public EntityFocused(IEntity entity, string location)
        {
            _entity = entity;
            _location = location;
        }



        public IEntity Entity
        {
            get { return _entity; }
        }



        public string Location
        {
            get { return _location; }
        }
    }
}
