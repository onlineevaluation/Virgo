# 天秤座

天秤座是采用 `Kotlin` 语言 `SpringBoot` 框架 `Gradle` 构建的项目。

## 项目结构

```markdown
|
|--gradle (存放了Gradle的配置文件了 wrapper) 
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
|--ci.sql
|--gradlew
|--gradlew.bat
|--icon.png
|--LICENSE
|--setting.gradle
```

