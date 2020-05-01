using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CarBookingAPI.Models{
    public class FormRequest{
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string name {get; set;}
        public string reason {get; set;}
        public string pickupDate {get; set;}
        public string pickupTime {get; set;}
        public string returnDate {get; set;}
        public string returnTime {get; set;}
        public string destination {get; set;}
    }
}