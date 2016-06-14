//dependencies
var path = require('path');
var _ = require('underscore');

module.exports = function IndexModule(pb) {

    //pb dependencies
    var util = pb.util;

    function Index() {
    }

    util.inherits(Index, pb.BaseController);

    Index.prototype.init = function (props, cb) {
        var self = this;
        pb.BaseController.prototype.init.call(self, props, function () {
            self.siteQueryService = new pb.SiteQueryService({
                site: self.site
            });
            cb();
        });
    };

    Index.prototype.render = function (cb) {
        var self = this;
        var objects= {
            jobid: self.pathVars.id
        }

        self.ts.registerLocal('angular_script', '');
        self.ts.registerLocal('angular_objects', new pb.TemplateValue(pb.ClientJs.getAngularObjects(objects), false));

        self.ts.load('mw_project', function (err, result) {
            if (util.isError(err)) {
                throw err;
            }
            cb({content: result});
        });
    };

    Index.getRoutes = function (cb) {
        var routes = [{
            method: 'get',
            path: '/projects/:id',
            auth_required: false,
            content_type: 'text/html'
        }];
        cb(null, routes);
    };
    //exports
    return Index;
};
