console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java 100 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.common.WorkerUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.common.WorkerUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "abort(Logger;String;Throwable;KafkaFutureImpl<String>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "perSecToPerPeriod(float;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addConfigsToProperties(Properties;Map<String,String>;Map<String,String>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createTopics(Logger;String;Map<String,String>;Map<String,String>;Map<String,NewTopic>;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "createTopics(Logger;Admin;Map<String,NewTopic>;boolean)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Collection<String>"
 , "c2" : "createTopics(Logger;Admin;Collection<NewTopic>)"
 , "c3" : "12"
 , "c4" : "29"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "verifyTopics(Logger;Admin;Collection<String>;Map<String,NewTopic>;int;long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,TopicDescription>"
 , "c2" : "topicDescriptions(Collection<String>;Admin;int;long)"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "Collection<TopicPartition>"
 , "c2" : "getMatchingTopicPartitions(Admin;String;int;int)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Admin"
 , "c2" : "createAdminClient(String;Map<String,String>;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "15"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00038] The class WorkerUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method abort arguments Logger  log|String  what|Throwable  exception|KafkaFutureImpl&lt;String &gt;  doneFuture"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument doneFuture is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00043] The same method call exception.getMessage() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.trogdor.common.WorkerUtils.abort@POLYN222055 the MagicNumber/String  '{} caught an exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.trogdor.common.WorkerUtils.abort@POLYN222055 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method perSecToPerPeriod arguments float  perSec|long  periodMs"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.trogdor.common.WorkerUtils.perSecToPerPeriod@POLYN222991 the MagicNumber/String  1000.0f should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.trogdor.common.WorkerUtils.perSecToPerPeriod@POLYN222991 the MagicNumber/String  1.0f should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method addConfigsToProperties arguments Properties  props|Map&lt;String ,String &gt;  commonConf|Map&lt;String ,String &gt;  clientConf"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument commonConf is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument clientConf is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method createTopics arguments Logger  log|String  bootstrapServers|Map&lt;String ,String &gt;  commonClientConf|Map&lt;String ,String &gt;  adminClientConf|Map&lt;String ,NewTopic &gt;  topics|boolean  failOnExisting"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN225061 the MagicNumber/String  'Failed to create or verify topics {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method createTopics arguments Logger  log|Admin  adminClient|Map&lt;String ,NewTopic &gt;  topics|boolean  failOnExisting"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00094] For method createTopics list of called methods Object monObjet|java.util.Collection&lt;String&gt; createTopicsN226507"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#95"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00095] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument topics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN226110 the MagicNumber/String  'Request to create topics has an empty topic list.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN226110 the MagicNumber/String  'Topic(s) {} already exist.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN226110 the MagicNumber/String  'One or more topics already exist.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN226110 the MagicNumber/String  3 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN226110 the MagicNumber/String  2500 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method createTopics arguments Logger  log|Admin  adminClient|Collection&lt;NewTopic &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00114] For method createTopics list of called methods Object monObjet|long Time_SYSTEM_millisecondsN227568"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#114"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00114] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00139"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00139] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00164] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00140] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00141] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00145] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00146] The same method call e.getCause() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  'Attempting to create {} topics (try {})...' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  'Successfully created {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  'Attempt to create topic `{}` failed: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  'Topic {} already exists.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  'Failed to create {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  'Unable to create topic(s): ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  'after ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.trogdor.common.WorkerUtils.createTopics@POLYN227388 the MagicNumber/String  ' attempt(s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method verifyTopics arguments Logger  log|Admin  adminClient|Collection&lt;String &gt;  topicsToVerify|Map&lt;String ,NewTopic &gt;  topicsInfo|int  retryCount|long  retryBackoffMs"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00174] For method verifyTopics list of called methods Object monObjet|java.util.Map&lt;String,org.apache.kafka.clients.admin.TopicDescription&gt; topicDescriptionsN232131"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#175"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00175] The argument log is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#176"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00176] The argument topicsInfo is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00186] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String  'Topic '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String  '' exists, but has ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String  ' partitions, while requested ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String  ' number of partitions is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method topicDescriptions arguments Collection&lt;String &gt;  topicsToVerify|Admin  adminClient|int  retryCount|long  retryBackoffMs"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#196"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00196] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00202] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00205] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00206] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00207] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.trogdor.common.WorkerUtils.topicDescriptions@POLYN233097 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.trogdor.common.WorkerUtils.topicDescriptions@POLYN233097 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method getMatchingTopicPartitions arguments Admin  adminClient|String  topicRegex|int  startPartition|int  endPartition"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00218] For method getMatchingTopicPartitions list of called methods Object monObjet|org.apache.kafka.clients.admin.ListTopicsResult adminClient_listTopicsN234787|org.apache.kafka.common.KafkaFuture&lt;Map&lt;String,TopicListing&gt;&gt; res_namesToListingsN234976|org.apache.kafka.clients.admin.DescribeTopicsResult adminClient_describeTopicsN235611|org.apache.kafka.common.KafkaFuture&lt;Map&lt;String,TopicDescription&gt;&gt; topicsResult_allTopicNamesN235822|java.util.List&lt;org.apache.kafka.common.TopicPartitionInfo&gt; desc_partitionsN236032"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument adminClient is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00241] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00242] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00243] The same method call info.partition() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#251"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00251] For method createAdminClient arguments String  bootstrapServers|Map&lt;String ,String &gt;  commonClientConf|Map&lt;String ,String &gt;  adminClientConf"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.common.WorkerUtils.abort@POLYN222055"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.common.WorkerUtils.perSecToPerPeriod@POLYN222991"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String '' exists, but has ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String 'Topic '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00187] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String ' partitions, while requested ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00188"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00188] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.verifyTopics@POLYN231806 the MagicNumber/String ' number of partitions is ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#42"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00042] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.abort@POLYN222055 the MagicNumber/String '{} caught an exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.abort@POLYN222055 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00053] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.perSecToPerPeriod@POLYN222991 the MagicNumber/String 1000.0f MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/common/WorkerUtils.java.html#55"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00055] In the recursive method org.apache.kafka.trogdor.common.WorkerUtils.perSecToPerPeriod@POLYN222991 the MagicNumber/String 1.0f MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
