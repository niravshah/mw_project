module.exports = function(pb) {

    //pb dependencies
    var util              = pb.util;
    var BaseObjectService = pb.BaseObjectService;

    /**
     * ProjectService - An example of a service that leverages the
     * BaseObjectService to perform the heavy lifting for CRUD operations.
     * @class ProjectService
     * @constructor
     * @extends BaseObjectService
     */
    function ProjectService(context) {
        if (!util.isObject(context)) {
            context = {};
        }

        context.type = TYPE;
        ProjectService.super_.call(this, context);
    }
    util.inherits(ProjectService, BaseObjectService);

    /**
     * The name of the DB collection where the resources are persisted
     * @private
     * @static
     * @readonly
     * @property TYPE
     * @type {String}
     */
    var TYPE = 'mw_project';

    /**
     * The name the service
     * @private
     * @static
     * @readonly
     * @property SERVICE_NAME
     * @type {String}
     */
    var SERVICE_NAME = 'ProjectService';

    /**
     * Responsible for taking the raw incoming object from the request and
     * formatting each property as it should be for persistence.
     * @static
     * @method format
     * @param {Object} context
     * @param {Object} data The DTO that was provided for persistence
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.format = function(context, cb) {
        cb(null);
    };

    /**
     * Merges the incoming DTO with the existing or new object that will be persisted
     * @static
     * @method merge
     * @param {Object} context
     * @param {Boolean} isCreate Indicates if this is a creation operation
     * @param {Boolean} isUpdate Indicates if the this is an update operation
     * @param {Object} data The DTO that was provided for persistence
     * @param {Object} object The object that will actually be persisted.  On
     * Updates this is the resource that was retrieved from the DB
     * @param {ProjectService} context.service An instance of the service that
     * triggered the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.merge = function(context, cb) {
        cb(null);
    };

    /**
     * Validates the object.  Any errors should be pushed to the
     * context.validationErrors property so that a 400 response can be
     * generated.
     * @static
     * @method validate
     * @param {Object} context
     * @param {Boolean} isCreate Indicates if this is a creation operation
     * @param {Boolean} isUpdate Indicates if the this is an update operation
     * @param {Object} context.data The object that is to be validated before persistence
     * @param {Array} context.validationErrors The array that can be added to in
     * order to supply your own validation errors
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.validate = function(context, cb) {

        var obj    = context.data;
        var errors = context.validationErrors;

        if (!pb.ValidationService.isNonEmptyStr(obj.name, true)) {
            errors.push(BaseObjectService.validationFailure('name', 'Name is required'));
        }

        if (!pb.ValidationService.isNonEmptyStr(obj.description, true)) {
            errors.push(BaseObjectService.validationFailure('description', 'Description is required'));
        }
        
        cb(null);
    };

    /**
     * Provides a mechanism to inspect the results of a query against the
     * collection.  Each object can be modified before it is passed back to the
     * calling entity.
     * @static
     * @method getAll
     * @param {Object} context
     * @param {Array} context.data The array of objects from the query
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.getAll = function(context, cb) {
        cb(null);
    };

    /**
     * Provides a mechanism to inspect an object before it is passed back to the
     * entity that requested its retrieval.
     * @static
     * @method get
     * @param {Object} context
     * @param {Object} context.data The object that was retrieved from the persistence layer
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.get = function(context, cb) {

        //remove the super secret id before we pass it back out of the
        //service layer
        delete context.data.superSecretId;

        cb(null);
    };

    /**
     * Provides a mechansim to inspect an object just before it is persisted
     * @static
     * @method beforeSave
     * @param {Object} context
     * @param {Boolean} isCreate Indicates if this is a creation operation
     * @param {Boolean} isUpdate Indicates if the this is an update operation
     * @param {Object} context.data The object that is to be validated before persistence
     * @param {Array} context.validationErrors The array that can be added to in
     * order to supply your own validation errors
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.beforeSave = function(context, cb) {
        /* No-op */

        cb(null);
    };

    /**
     * Provides a mechanism to inspect an object just after it is persited
     * @static
     * @method afterSave
     * @param {Object} context
     * @param {Boolean} isCreate Indicates if this is a creation operation
     * @param {Boolean} isUpdate Indicates if the this is an update operation
     * @param {Object} context.data The object that is to be validated before persistence
     * @param {Array} context.validationErrors The array that can be added to in
     * order to supply your own validation errors
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.afterSave = function(context, cb) {
        /* No-op */

        cb(null);
    };

    /**
     * Provides a mechansim to inspect an object before it is deleted
     * @static
     * @method beforeDelete
     * @param {Object} context
     * @param {Object} context.data The object that is to be deleted
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.beforeDelete = function(context, cb) {
        cb(null);
    };

    /**
     * Provides a mechansim to inspect an object just after it has been deleted
     * @static
     * @method afterDelete
     * @param {Object} context
     * @param {Object} context.data The object that is to be deleted
     * @param {ProjectService} context.service An instance of the service that triggered
     * the event that called this handler
     * @param {Function} cb A callback that takes a single parameter: an error if occurred
     */
    ProjectService.afterDelete = function(context, cb) {
        /* Do any cleanup of related objects since the object is now deleted */

        cb(null);
    };

    /**
     * This function is called when the service is being setup by the system.  It is
     * responsible for any setup that is needed when first created.  The services
     * are all instantiated at once and are not added to the platform untill all
     * initialization is complete.  Relying on other plugin services in the
     * initialization could result in failure.
     *
     * @static
     * @method init
     * @param {Function} cb A callback that should provide one argument: cb(error) or cb(null)
     * if initialization proceeded successfully.
     */
    ProjectService.init = function(cb) {
        pb.log.info("ProjectService: Initialized");
        cb(null, true);
    };

    /**
     * A service interface function designed to allow developers to name the handle
     * to the service object what ever they desire. The function must return a
     * valid string and must not conflict with the names of other services for the
     * plugin that the service is associated with.
     *
     * @static
     * @method getName
     * @return {String} The service name
     */
    ProjectService.getName = function() {
        return SERVICE_NAME;
    };

    //Event Registries - Sets the handlers as the call backs when events are triggered for the given collection
    BaseObjectService.on(TYPE + '.' + BaseObjectService.FORMAT, ProjectService.format);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.MERGE, ProjectService.merge);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.VALIDATE, ProjectService.validate);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.GET, ProjectService.get);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.GET_ALL, ProjectService.getAll);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.BEFORE_SAVE, ProjectService.beforeSave);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.AFTER_SAVE, ProjectService.afterSave);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.BEFORE_DELETE, ProjectService.beforeDelete);
    BaseObjectService.on(TYPE + '.' + BaseObjectService.AFTER_DELETE, ProjectService.afterDelete);

    //exports
    return ProjectService;
};
