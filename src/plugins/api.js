import instance from '../api/api'

export default {
    install(app) {
        app.config.globalProperties.$api = instance;
    }
}