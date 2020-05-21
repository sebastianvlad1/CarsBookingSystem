using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CarBookingAPI.Models{
    public class Car{
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string nr_inmatriculare {get; set;}
    }
}