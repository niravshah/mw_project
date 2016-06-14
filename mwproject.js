
module.exports = function ProjectPluginModule(pb) {

    /**
     * ProjectPluginModule
     * @copyright 2016 Movewithin
     */
    function ProjectPlugin(){}

    /**
     * Called when the application is being installed for the first time.
     * @static
     * @method onInstallWithContext
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ProjectPlugin.onInstallWithContext = function(context, cb) {
        cb(null, true);
    };

    /**
     * Called when the application is uninstalling this plugin.  The plugin should
     * make every effort to clean up any plugin-specific DB items or any in function
     * overrides it makes.
     *
     * @param context
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ProjectPlugin.onUninstallWithContext = function (context, cb) {
        var site = pb.SiteService.getCurrentSite(context.site);

        // Remove "sample" nav during uninstall
        pb.AdminNavigation.removeFromSite("mw_project", site);
        cb(null, true);
    };

    /**
     * Called when the application is starting up. The function is also called at
     * the end of a successful install. It is guaranteed that all core PB services
     * will be available including access to the core DB.
     *
     * @param context
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ProjectPlugin.onStartupWithContext = function (context, cb) {

        var site = pb.SiteService.getCurrentSite(context.site);
        pb.AdminNavigation.addToSite({
            id: "mw_project",
            title: "Projects",
            icon: "cogs",
            href: "/admin/projects",
            access: pb.SecurityService.ACCESS_USER,
        }, site);

        cb(null, true);
    };

    /**
     * Called when the application is gracefully shutting down.  No guarantees are
     * provided for how much time will be provided the plugin to shut down.
     *
     * @param cb A callback that must be called upon completion.  cb(Error, Boolean).
     * The result should be TRUE on success and FALSE on failure
     */
    ProjectPlugin.onShutdown = function(cb) {
        cb(null, true);
    };

    //exports
    return ProjectPlugin;
};
