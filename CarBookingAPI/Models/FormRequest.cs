using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CarBookingAPI.Models{
    public class FormRequest{
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string name {get; set;}
        public string reason {get; set;}
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime pickupDate {get; set;}
        public string pickupTime {get; set;}
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime returnDate {get; set;}
        public string returnTime {get; set;}
        public string destination {get; set;}
        public string status {get; set;}
    }
}