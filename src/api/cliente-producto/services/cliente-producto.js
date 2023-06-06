'use strict';

/**
 * cliente-producto service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cliente-producto.cliente-producto');
