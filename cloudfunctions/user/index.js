// 云函数入口文件
const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const usersCollection = db.collection('users')
  const app = new TcbRouter({
    event
  })
  const wxContext = cloud.getWXContext()

  app.router('updateMobieAndWechat', async (ctx, next) => {
    const db = cloud.database()
    const res = await db.collection('users')
      .where({
        _openid: wxContext.OPENID
      })
      .update({
        data: {
          mobile: event.mobile,
          wechat: event.wechat
        }
      })
    ctx.body = {
      updated: res.stats.updated,
      message: 'success'
    }
  })

  app.router('login', async (ctx, next) => {
    const userInfo = event.userInfo
    const user = await usersCollection.where({
      _openid: wxContext.OPENID
    }).get()

    if (user.data.length === 0) {
      userInfo['_openid'] = wxContext.OPENID
      await usersCollection.add({
        data: userInfo
      })
    } else {
      await usersCollection.doc(user.data[0]._id).update({
        data: userInfo
      })
    }
    ctx.body = {
      code: 200,
      message: 'success'
    }
  })
  return app.serve()
}