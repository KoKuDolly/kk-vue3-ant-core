# ci_portal 后端部分代码

### 后端代码开发环境

```python
开发系统环境： ubuntu
框架： django

```

### 说明

此版本为 base 版本，只有一个添加 repo 页面和功能

运行前确认使用的数据库及对应的表结构是否一致

#### **需要安装以下软件**

以及 requirements.txt

```python
apt-get install python3-pip tzdata uwsgi
```

#### requirements.txt

```python
Django==3.2.9
djangorestframework==3.12.4
pymysql==1.0.2
```

### 流程

```python
pass
后续补充
```

### 配置文件

```python
# 配置文件： 项目/conf/configure_server.json
base 版本使用数据库为99的portal_for_zyy测试库, 真正提交时需要

# repo前端页面 url 需要修改ip
base 版本添加repo前端页面使用ajax异步请求方式，需要修改url对应接口的ip和端口，如下：
...
  $.post(
    "http://192.168.23.182:8000/repo/",  # 需要注意此处理的ip和port
    {
...
```

### 启动方式

```python
# 测试、联调、开发 启动方式 或者使用 pycharm运行项目
cd /项目目录/ && python3 manage.py runserver 192.168.23.182:8000

# 正式运行启动方式
uwsgi -i /octa_ci_srv_portal/backend/k8s_portal/uwsgi.ini # 需要配置 启动的ip和端口

```

### 使用 API 接口

```python
浏览器直接打开http://ip:port/ 进行repo的添加
每个接口都支持。GET/POST/DELETE/PATCH http请求试

```

#### /repo/

```python
http://ip:port/repo/
```

#### /event/

```python
http://ip:port/event/
```

#### /job/

```
http://ip:port/job/
```

#### /log/

```
http://ip:port/log/
```

### /check/

```python
http://ip:port/check/
# 此接口公支持POST请求方式，用于一次性处理单个repo的一系列操作
例：
{
  "repo":"repo_name",
  "user": "xxx",
  "token": "xxx"
}
此版本先不做前端页面
```

### 各表结构

#### gitstat 表

| 字段名     | 长度/类型 | 说明                                                                                           |
| ---------- | --------- | ---------------------------------------------------------------------------------------------- |
| id         | int       | 默认自增                                                                                       |
| repo_name  | Str/150   | 唯一                                                                                           |
| repo       | Str/200   | git 路径 bitback 路径如：https://username:password@bitbucket.org/8labteam/prometh_exporter.git |
| branch     | Str/150   | git 分支                                                                                       |
| tag        | Str/100   | 版本                                                                                           |
| build_path | Str/150   | build 镜像路径                                                                                 |
| dockerfile | Str/150   | dockerfile 文件路径                                                                            |
| job        | Str/100   | 创建 k8s job 的名称                                                                            |
| type       | Str/20    | 类型                                                                                           |
| image      | Str/150   |                                                                                                |
| desc       | Str/200   | 描述信息                                                                                       |
| Time       | Timestamp | 时间戳类型 前端显示格式为 %Y%m%d %H%M%S                                                        |
| user       | Str/50    | 创建 repo 的用户                                                                               |
| ca_secret  | Str/150   | 证书                                                                                           |
| name       | Str/50    |                                                                                                |

#### log

此表用来记录 repo

| 字段名      | 长度/类型 | 说明                          |
| ----------- | --------- | ----------------------------- |
| id          | int       | 默认自增                      |
| Repo_name   |           | 外键 repo 表 repo \_name 字段 |
| event_uuid  |           | 外键 event 表                 |
| Runner_uuid |           | 外键 runner 表                |
| msg         |           | 变化信息                      |
| create_at   |           | msg 字段被更新的时间          |

#### event 表

| 字段名    | 长度/类型 | 说明                                                       | 默认值 |
| --------- | --------- | ---------------------------------------------------------- | ------ |
| id        | int       | 默认自增                                                   |        |
| name      | str/100   | 事件名称 格式如：event-prometh-exporter-buildv202111251517 |        |
| status    | Str/20    | 1:初始化状态 2: 3: 4:                                      | 1      |
| repo      | Str/150   |                                                            |        |
| job       | Str/100   |                                                            |        |
| type      | Str/50    |                                                            |        |
| image     | Str/200   |                                                            |        |
| Image_tag | Str/20    |                                                            |        |
| ctime     | timestap  | 时间戳类型 前端显示格式为 %Y%m%d %H%M%S                    |        |
| Desc      | Str/300   |                                                            |        |

#### runner 表

记录 job 运行

| 字段名          | 长度/类型 | 说明                                    |
| --------------- | --------- | --------------------------------------- |
| id              | int       | 默认自增                                |
| name            | Str/100   |                                         |
| status          | Str/10    |                                         |
| type            | Str/50    |                                         |
| REGISTORY_ADD   | Str/150   |                                         |
| REGISTRY_NAME   | Str/150   |                                         |
| IMAGE_TAG       | Str/150   |                                         |
| REPO_PATH       | Str/150   |                                         |
| IMAGE_REPO      | Str/150   |                                         |
| REGISTRY_PASS   | Str/150   |                                         |
| IMAGE_NAME      | Str/150   |                                         |
| REPO_DOCKERFILE | Str/150   |                                         |
| BUILD_PATH      | Str/150   |                                         |
| desc            | Str/200   |                                         |
| ctime           | datetime  | 时间戳类型 前端显示格式为 %Y%m%d %H%M%S |

### 表依赖关系

```python
# 后补充
```
