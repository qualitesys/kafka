console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java 117 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.agent.AgentClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.agent.AgentClient" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AgentClient"
 , "c2" : "AgentClient(Logger;int;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "target()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "maxTries()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "url(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "AgentStatusResponse"
 , "c2" : "status()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "UptimeResponse"
 , "c2" : "uptime()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createWorker(CreateWorkerRequest)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "stopWorker(StopWorkerRequest)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "destroyWorker(DestroyWorkerRequest)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "invokeShutdown()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addTargetArgument(ArgumentParser)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addJsonArgument(ArgumentParser)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addWorkerIdArgument(ArgumentParser;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "12"
 , "c4" : "67"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.svg" }

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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE484"
 , "c3" : "Omitted Break Statement in Switch"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "96"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00042] The class AgentClient contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00051] The class Builder contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method log arguments Logger  log"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method maxTries arguments int  maxTries"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method target arguments String  target"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method target arguments String  host|int  port"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN192954 the MagicNumber/String  '%s:%d' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.trogdor.agent.AgentClient.Builder.build@POLYN193234 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.trogdor.agent.AgentClient.Builder.build@POLYN193234 the MagicNumber/String  'You must specify a target.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method url arguments String  suffix"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.agent.AgentClient.url@POLYN194028 the MagicNumber/String  'http://%s%s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.agent.AgentClient.status@POLYN194221 the MagicNumber/String  '/agent/status' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.trogdor.agent.AgentClient.status@POLYN194221 the MagicNumber/String  'GET' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.agent.AgentClient.status@POLYN194221 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.trogdor.agent.AgentClient.uptime@POLYN194650 the MagicNumber/String  '/agent/uptime' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.trogdor.agent.AgentClient.uptime@POLYN194650 the MagicNumber/String  'GET' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.trogdor.agent.AgentClient.uptime@POLYN194650 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method createWorker arguments CreateWorkerRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.agent.AgentClient.createWorker@POLYN195046 the MagicNumber/String  '/agent/worker/create' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.trogdor.agent.AgentClient.createWorker@POLYN195046 the MagicNumber/String  'POST' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method stopWorker arguments StopWorkerRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.trogdor.agent.AgentClient.stopWorker@POLYN195482 the MagicNumber/String  '/agent/worker/stop' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.trogdor.agent.AgentClient.stopWorker@POLYN195482 the MagicNumber/String  'PUT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method destroyWorker arguments DestroyWorkerRequest  request"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#135"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00135] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.agent.AgentClient.destroyWorker@POLYN195918 the MagicNumber/String  '/agent/worker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.trogdor.agent.AgentClient.destroyWorker@POLYN195918 the MagicNumber/String  'workerId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.trogdor.agent.AgentClient.destroyWorker@POLYN195918 the MagicNumber/String  'DELETE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.trogdor.agent.AgentClient.destroyWorker@POLYN195918 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.trogdor.agent.AgentClient.invokeShutdown@POLYN196605 the MagicNumber/String  '/agent/shutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.trogdor.agent.AgentClient.invokeShutdown@POLYN196605 the MagicNumber/String  'PUT' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.trogdor.agent.AgentClient.invokeShutdown@POLYN196605 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#152"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00152] For method addTargetArgument arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#152"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00152] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.trogdor.agent.AgentClient.addTargetArgument@POLYN197026 the MagicNumber/String  '--target' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.trogdor.agent.AgentClient.addTargetArgument@POLYN197026 the MagicNumber/String  '-t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.trogdor.agent.AgentClient.addTargetArgument@POLYN197026 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.trogdor.agent.AgentClient.addTargetArgument@POLYN197026 the MagicNumber/String  'target' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.trogdor.agent.AgentClient.addTargetArgument@POLYN197026 the MagicNumber/String  'TARGET' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.trogdor.agent.AgentClient.addTargetArgument@POLYN197026 the MagicNumber/String  'A colon-separated host and port pair.  For example, example.com:8888' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method addJsonArgument arguments ArgumentParser  parser"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#162"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00162] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.trogdor.agent.AgentClient.addJsonArgument@POLYN197455 the MagicNumber/String  '--json' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.trogdor.agent.AgentClient.addJsonArgument@POLYN197455 the MagicNumber/String  'json' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.trogdor.agent.AgentClient.addJsonArgument@POLYN197455 the MagicNumber/String  'JSON' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.trogdor.agent.AgentClient.addJsonArgument@POLYN197455 the MagicNumber/String  'Show the full response as JSON.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method addWorkerIdArgument arguments ArgumentParser  parser|String  help"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#170"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00170] The argument parser is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.trogdor.agent.AgentClient.addWorkerIdArgument@POLYN197770 the MagicNumber/String  '--workerId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.trogdor.agent.AgentClient.addWorkerIdArgument@POLYN197770 the MagicNumber/String  'workerId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.trogdor.agent.AgentClient.addWorkerIdArgument@POLYN197770 the MagicNumber/String  'WORKER_ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00179] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#179"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00179] For method main list of called methods Object monObjet|org.apache.kafka.trogdor.rest.UptimeResponse client_uptimeN201442|org.apache.kafka.trogdor.rest.AgentStatusResponse client_statusN202467"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00260] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#299"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE484[00299] Omitted break statement in switch (see http://cwe.mitre.org/data/definitions/484.html)"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'trogdor-agent-client' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'The Trogdor agent client.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'command' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'uptime' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Get the agent uptime.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Get the agent status.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'createWorker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Create a new worker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'The worker ID to create.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  '--taskId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'taskId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'TASK_ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'The task ID to create.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  '--spec' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  '-s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'taskSpec' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'TASK_SPEC' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'The task spec to create, or a path to a file containing the task spec.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'stopWorker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Stop a worker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'The worker ID to stop.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'destroyWorker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Destroy a worker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'The worker ID to destroy.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'shutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Shut down the agent.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'target' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00231"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'command' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00232"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'uptime' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00234"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'json' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Agent is running at %s.%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  '\tStart time: %s%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  '\tCurrent server time: %s%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  '\tUptime: %s%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'status' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'json' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Agent is running at %s.%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  '\tStart time: %s%n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'WORKER_ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'TASK_ID' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'STATE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'TASK_TYPE' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'createWorker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'workerId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'taskId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'taskSpec' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Sent CreateWorkerRequest for worker %d%n.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00282"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00282] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'stopWorker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'workerId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Sent StopWorkerRequest for worker %d%n.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'destroyWorker' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'workerId' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Sent DestroyWorkerRequest for worker %d%n.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'shutdown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'Sent ShutdownRequest.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  'You must choose an action. Type --help for help.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/agent/AgentClient.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.trogdor.agent.AgentClient.main@POLYN198157 the MagicNumber/String  1 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
