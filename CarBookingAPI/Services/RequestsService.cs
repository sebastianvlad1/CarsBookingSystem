using System.Collections.Generic;
using CarBookingAPI.Models;
using MongoDB.Driver;

namespace CarBookingAPI.Services{
    public class RequestsService{
        private readonly IMongoCollection<FormRequest> _requests;
        public RequestsService(IDatabaseSettings settings){
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _requests = database.GetCollection<FormRequest>(settings.RequestsCollectionName);
        }
        public List<FormRequest> GetAll() => 
            _requests.Find(_ => true).ToList();

        public void Create(FormRequest req){
            _requests.InsertOne(req);
        }
    }
}