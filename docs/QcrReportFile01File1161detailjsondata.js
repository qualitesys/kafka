console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java 47 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ConnectResource"
 , "c2" : "org.apache.kafka.connect.runtime.rest.resources.LoggingResource"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.rest.resources.LoggingResource" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#57"
 , "c1" : "void"
 , "c2" : "requestTimeout(long)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#69"
 , "c1" : "Response"
 , "c2" : "listLoggers()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#94"
 , "c1" : "Response"
 , "c2" : "getLogger(String)"
 , "c3" : "7"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#132"
 , "c1" : "Response"
 , "c2" : "setLevel(String;Map<String,String>)"
 , "c3" : "10"
 , "c4" : "20"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#177"
 , "c1" : "Logger"
 , "c2" : "lookupLogger(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00182"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#182"
 , "c1" : "Enumeration<Logger>"
 , "c2" : "currentLoggers()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00186"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#186"
 , "c1" : "Logger"
 , "c2" : "rootLogger()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00197"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#197"
 , "c1" : "Map<String,String>"
 , "c2" : "effectiveLevelToMap(Logger)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00212"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#212"
 , "c1" : "Map<String,String>"
 , "c2" : "levelToMap(Logger)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method requestTimeout arguments long  requestTimeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00069] For method listLoggers list of called methods Object monObjet|java.util.Enumeration currentLoggersN175435|Logger rootLoggerN175879"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.listLoggers@POLYN175181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.listLoggers@POLYN175181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method getLogger arguments String  namedLogger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00094] For method getLogger list of called methods Object monObjet|Logger rootLoggerN176871|java.util.Enumeration currentLoggersN176978|T en_nextElementN177114"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#94"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00094] The argument namedLogger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00106] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN176487 the MagicNumber/String  'require non-null name' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN176487 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN176487 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN176487 the MagicNumber/String  'Logger ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.getLogger@POLYN176487 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method setLevel arguments String  namedLogger|Map&lt;String ,String &gt;  levelMap"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00132] For method setLevel list of called methods Object monObjet|V levelMap_getN178294|Logger lookupLoggerN179327|java.util.Enumeration currentLoggersN179434|T en_nextElementN179627"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument namedLogger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00133] The argument levelMap is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00154] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  'Desired 'level' parameter was not specified in request.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  'invalid log level '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  ''.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method lookupLogger arguments String  namedLogger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00197] For method effectiveLevelToMap arguments Logger  logger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#197"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00197] The argument logger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.effectiveLevelToMap@POLYN181314 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.effectiveLevelToMap@POLYN181314 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method levelToMap arguments Logger  logger"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#212"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00212] The argument logger is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.levelToMap@POLYN181958 the MagicNumber/String  'level' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00057] Void method requestTimeout is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00057] Void method requestTimeout is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00134] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String 'level' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#136"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00136] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String 'Desired 'level' parameter was not specified in request.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00140] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String ''.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00141] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String 'invalid log level '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.html#159"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00159] In the recursive method org.apache.kafka.connect.runtime.rest.resources.LoggingResource.setLevel@POLYN178084 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/LoggingResource.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
