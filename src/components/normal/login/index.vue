<template>
  <div class="login-content">
    <section class="login-content-title"></section>
    <div class="login-content-body">
      <section class="login-content-body-title">
        <header>WEB-PORTAL</header>
        <p>octa_ci_srv_portal</p>
      </section>
      <div class="login-content-body-form">
        <Form
          ref="form"
          hideRequiredMark
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 24 }"
          :rules="rules"
          :model="model"
        >
          <FormItem name="username">
            <Input
              placeholder="用户名: 请输入用户名"
              v-model:value="model.username"
              @keydown.enter="handleLogin"
            >
              <template #prefix>
                <UserOutlined />
              </template>
            </Input>
          </FormItem>
          <FormItem name="password">
            <Password
              placeholder="密码: 请输入密码"
              v-model:value="model.password"
              @keydown.enter="handleLogin"
            >
              <template #prefix>
                <UnlockOutlined />
              </template>
            </Password>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              class="form-login-btn"
              block
              @click="handleLogin"
              >登录</Button
            >
          </FormItem>
        </Form>
        <p class="form-login-info">输入任意用户名和密码即可</p>
      </div>
    </div>
    <div class="login-content-footer">
      Copyright © 2021 北京八分量科技有限公司
    </div>
  </div>
</template>
<script>
import { Form, Input, Button } from 'ant-design-vue'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons-vue'
import { reactive, ref } from '@vue/reactivity'
import useLoginHooks from './useLoginHooks.js'

const FormItem = Form.Item
const Password = Input.Password
export default {
  name: 'login',
  components: {
    Form,
    Input,
    FormItem,
    Password,
    Button,
    UnlockOutlined,
    UserOutlined,
  },
  setup() {
    const form = ref()
    const model = reactive({
      username: '',
      password: '',
    })

    const rules = {
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        },
      ],
    }

    const { handleLogin } = useLoginHooks(model, form)

    return {
      model,
      rules,
      handleLogin,
      form,
    }
  },
}
</script>
<style lang="less">
.login-content {
  background: url('./login.jpg');
  // background: url('./login.jpeg') right bottom / cover no-repeat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;

  &-body {
    flex: 1 1;
    padding: 32px 0 24px;
    &-title {
      width: 360px;
      margin: 0 auto;
      text-align: center;
      header {
        font-size: 24px;
      }
      p {
        color: rgba(0, 0, 0, 0.45);
      }
    }

    &-form {
      display: flex;
      flex-direction: column;
      flex: 1 1;
      width: 360px;
      margin: 0 auto;
      padding: 32px 0 24px;
      .form-login-info {
        text-align: right;
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }

  .login-content-footer {
    padding: 32px 0 24px;
    text-align: center;
  }
}
</style>


