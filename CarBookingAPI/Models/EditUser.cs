using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CarBookingAPI.Models{
    public class EditUser {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Role {get; set;}
    }
}