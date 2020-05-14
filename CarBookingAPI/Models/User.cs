using System;
using System.Collections.Generic;
using MongoDB.Bson;

namespace CarBookingAPI.Models
{
    public class User
    {
        public ObjectId Id { get; set; }
        public string Username { get; set; }
        public string Password {get; set;}
        public string Role {get; set;}
    }
}