# 项目结构

## 主结构

```markdown
|
|--gradle (存放了 Gradle 的配置文件了 wrapper)
|  |-gradle-wrapper.jar
|  |-gradle-wrapper.properties
|  
|--src (主要的项目代码文件)
|  |--main
|  |  |--kotlin
|  |  |  |-com.nuc.libra
|  |  |
|  |  |--resource
|  |     |-application.yml
|  |     |-application-ci.yml
|  |     |-application-dev.yml
|  |     |-application-prod.yml
|  |     |-banner.jpg
|  |
|  |--test
|     |--kotlin
|     |--resource
|
|--.gitignore
|--.travis.yml (travis ci 配置文件)
|--api.http (接口测试文件，前后端通用)
|--build.gradle
|--ci.sql (travis.ci 使用的数据库文件)
|--gradlew
|--gradlew.bat
|--icon.png
|--LICENSE
|--setting.gradle
```

主要结构，也是一个基本的 Gradle 项目结构。

`src/com/nuc/libra` 的详细结构下面在描述。

## src 代码结构



```markdown
src/com/nuc/libra
|
|--config (项目常用配置文件)
|  |--CorsConfig
|  |--DruidConfig
|  |--RabbitMq
|  |--SentryConfig
|  |--SwaggerConfig
|  |--WebSecurityConfig
|  |-- ...
|   
|--controller (控制器)
|  |--IndexController
|  |--PageController
|  |--UserController
|  |-- ...
|   
|--entity.result (数据结果，这个类的未知不对)
|  |--Result.kt
|  |-- ...
|  
|--exception (自定义异常类)
|  |--ResultException
|  |-- ...
|  
|--handler (自定义异常处理器)
|  |--ConditionalRejectiongErrorHandler
|  |--ExceptionHandler
|  |-- ...
|  
|--po (与数据库映射关系)
|  |--ClassAndPages
|  |--Page
|  |--PagesAndTitle
|  |--Role
|  |--Studenet
|  |--StudentAnswer
|  |--StudentScore
|  |--Title
|  |--User
|  |--UserAndRole
|  |-- ...
|  
|--repository (数据库操作类)
|  |--ClassAndPagesRepository
|  |--PageAndTitleRepository
|  |--PagesRepository
|  |--RoleRepository
|  |--StudentAnswerRepository
|  |--StudentRepository
|  |--StudentScoreRepository
|  |--TitleRepository
|  |--UserAndRoleRepository
|  |--UserRepository
|  |-- ...
|  
|--result (结果返回)
|  |--Result
|  |-- ...
|  
|--security (JWT 配置类)
|  |--JwtTokenFilter
|  |--JwtTokenFilterConfigurer
|  |--JwtTokenProvider
|  |-- ...
|  
|--service ( Service 类)
|  |--PageService
|  |--UserServoce
|  |--impl ()
|  |  |--PageServiceImpl
|  |  |--UserServiceImpl
|  |  |-- ...
|  
|--util (工具类)
|  |--CompilerUtils
|  |--ResultUtils
|  |--NLPUtils
|  |-- ...
|  
|--vo (与前端对应的 vo)
|  |--AnsVO
|  |--ComplierMessage
|  |--PageVo
|  |--Params
|  |--TitleVO
|  |-- ...
|  
|--jni
|  |--Capricornus
|  |--GoString
|  |--...
|
|--LibraApplication (启动类)  
```
