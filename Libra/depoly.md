# 部署

## 开发环境

- JDK 1.8
- Gradle 4.4
- Kotlin 1.3.20
- Mysql 5.6+
- RabbitMq
- SpringBoot 2.1.1.RELEASE

`JDK` 版本升级确保 `Kotlin` 完美支持后再进行升级, `Gradle` 环境确保所有插件可以完美支持后再进行升级。 `SpringBoot` 版本请使用最新 `Release` 版本, `Mysql` 使用最新版本。

确保开发环境有上述所有的环境。

## 生产环境

- JDK 1.8
- Mysql 5.6+
- RabbitMq

::: warning 注意
项目目前依托 JDK 全部环境，请勿使用 JRE 。
:::

## 项目编译

在开发环境下，从 Github 上拉取最新 master 分支上的代码,[https://github.com/youngxhui/Libra.git](https://github.com/youngxhui/Libra.git)。

将 `application.yml` 中的配置改为 `pord`。

```yml
spring:
  profiles:
    active: prod
```

同时修改 `application-prod.yml` 中部分信息，例如 `mysql` **用户名**，**密码**，所连接的**库**。`RabbitMq` 的**账号信息**等。

使用 `Gradle` 命令行进行编译 `./gradlew build`

正确编译后，会产生新的文件夹 `build` 。在该文件夹下的 `libs` 文件夹中有我们编译完成的 `jar` 包。

## 部署运行

将编译好的 jar 包移至生产环境。

### \*unx

确保 `RabbitMq` 和 `Mysql` 已经运行，并且安装有 `JDK` 。

采用 `nohup java -jar libra-version.java` 进行运行。

### windows

使用命令行 `java -jar libra-version.java` 启动项目。