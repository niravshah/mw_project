module.exports = function ProjectApiControllerModule(pb) {

    //PB dependencies
    var util              = pb.util;
    var BaseApiController = pb.BaseApiController;
    var PluginService     = pb.PluginService;

    function ProjectApiController(){}
    util.inherits(ProjectApiController, BaseApiController);


    ProjectApiController.prototype.init = function(props, cb) {
        var self = this;
        pb.BaseController.prototype.init.call(self, props, function () {
            var BookService = PluginService.getService('BookService', 'mw_project', self.site);
            self.service = new BookService(self.getServiceContext());
            cb();
        });

    };

    ProjectApiController.getRoutes = function(cb) {
        var routes = [
            {
                method: 'get',
                path: "/api/projects",
                handler: "getAll",
                content_type: 'application/json'
            },
            {
                method: 'get',
                path: "/api/projects/:id",
                handler: "get",
                content_type: 'application/json'
            },
            {
                method: 'put',
                path: "/api/projects/:id",
                handler: "put",
                content_type: 'application/json',
                request_body: ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data']
            },
            {
                method: 'post',
                path: "/api/projects",
                handler: "post",
                content_type: 'application/json',
                request_body: ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data']
            },
            {
                method: 'delete',
                path: "/api/projects/:id",
                handler: "delete",
                content_type: 'application/json'
            }
        ];
        cb(null, routes);
    };

    //exports
    return ProjectApiController;
};
