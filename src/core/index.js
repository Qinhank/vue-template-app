import Vue from 'vue'
import vant from 'vant'
import Storage from 'vue-ls'

import './request'
import 'vant/lib/index.css'
import '@/theme/vant.scss'

const { storageOption } = require('../../bp.config')

Vue.config.productionTip = false

Vue.use(vant)

Vue.use(Storage, storageOption)