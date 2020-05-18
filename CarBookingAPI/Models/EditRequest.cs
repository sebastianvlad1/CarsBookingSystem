using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CarBookingAPI.Models
{
    public class EditRequest
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string status {get; set;}
    }
}