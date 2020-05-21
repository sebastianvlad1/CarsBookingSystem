using System.Collections.Generic;
using CarBookingAPI.Models;
using MongoDB.Driver;
using System;
using MongoDB.Bson;
namespace CarBookingAPI.Services{
    public class RequestsService{
        private readonly IMongoCollection<FormRequest> _requests;
        private readonly IMongoCollection<User> _users;
        private readonly IMongoCollection<Car> _cars;
        public RequestsService(IDatabaseSettings settings){
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _requests = database.GetCollection<FormRequest>(settings.RequestsCollectionName);
            _users = database.GetCollection<User>(settings.UsersCollectionName);
            _cars = database.GetCollection<Car>(settings.CarsCollectionName);
        }
        public List<FormRequest> GetAll(string filter){
            if(filter.Equals("")){
                return _requests.Find(_ => true).SortByDescending(e => e.Id).ToList();
            }
            return _requests.Find(req => true && req.status.Equals(filter)).SortByDescending(e => e.Id).ToList();
        }
        public List<FormRequest> GetReqByDate(DateTime date){
            return _requests.Find(req => true && req.pickupDate == date).SortByDescending(e => e.Id).ToList();
        }
        public void Create(FormRequest req){
            _requests.InsertOne(req);
        }
        public object getNumbers(){
            var total = _requests.Find(_ => true).CountDocuments();
            var accepted = _requests.Find(req => true && req.status.Equals("Accepted")).CountDocuments();
            var waiting = _requests.Find(req => true && req.status.Equals("Waiting")).CountDocuments();
            var cancelled = _requests.Find(req => true && req.status.Equals("Cancelled")).CountDocuments();
            return new {total,accepted,waiting,cancelled};
        }
        public void CreateUser(User user){
            user.Role = "User";
            _users.InsertOne(user);
        }
        public User Login(User user){
            return _users.Find(x => x.Username.Equals(user.Username) && x.Password.Equals(user.Password)).Limit(1).SingleOrDefault();

        }
        public UpdateResult editRequest(EditRequest req){
            ObjectId id = new ObjectId(req.Id);
            var filter = Builders<FormRequest>.Filter.Eq("_id", id);
            var update = Builders<FormRequest>.Update.Set("status", req.status);
            return _requests.UpdateOne(filter, update);
        }
        public List<User> GetAllUsers(){
            return _users.Find(_ => true).SortByDescending(e => e.Id).ToList();
        }
        public UpdateResult addEditor(EditUser editUser){
            ObjectId id = new ObjectId(editUser.Id);
            var filter = Builders<User>.Filter.Eq("_id", id);
            var update = Builders<User>.Update.Set("Role", editUser.Role);
            return _users.UpdateOne(filter, update);
        }
        public void CreateCar(Car car){
            _cars.InsertOne(car);
        }
        public List<Car> GetAllCars(){
            return _cars.Find(_ => true).SortByDescending(e => e.Id).Limit(15).ToList();
        }
    }
}