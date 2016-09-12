/**
 * PoisController
 *
 * @description :: Server-side logic for managing pois
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	pois: function (req, res) {
        sails.log.info("query!");
        Poi.find({})
            .exec(function(err, store){
            if(err)
                res.send("Error:Sorry!Something went Wrong");
            else{
                sails.log.info(store);
                res.send(store);
            }
        })
    },
    addpoi: function (req, res) {
        sails.log.info("create!");
        Poi.create({
            name: req.body.name
        }).exec(function(err,model){
            if (err) {
                sails.log.error("Error:Sorry!Something went Wrong");
            }else {
                model.save();
                sails.log.info("Successfully Created!");
                //res.redirect( );            
            }
        }
        )}
}