import Vue from 'vue'
import vant from 'vant'
import Storage from 'vue-ls'

import "babel-polyfill"
import './request'
import 'vant/lib/index.css'
import '@/theme/vant.scss'

const { storageOption } = require('@config')

Vue.config.productionTip = false

Vue.use(vant)

Vue.use(Storage, storageOption)