var webglfactory = {
    create: function(options) {
        options || (options = {});
        var gl,
            canvas = document.createElement('canvas');
        try {
            gl = canvas.getContext(options.experimental ? 'experimental-webgl' : 'webgl');
        } catch (e) {}
        return gl;
    }
};
