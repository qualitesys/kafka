console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java 34 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractConfig"
 , "c2" : "org.apache.kafka.clients.consumer.ConsumerConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.ConsumerConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "postProcessParsedConfig(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeOverrideClientId(Map<String,Object>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,Object>"
 , "c2" : "appendDeserializerToConfig(Map<String,Object>;Deserializer<?>;Deserializer<?>)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybeOverrideEnableAutoCommit()"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerConfig"
 , "c2" : "ConsumerConfig(Properties)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerConfig"
 , "c2" : "ConsumerConfig(Map<String,Object>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerConfig"
 , "c2" : "ConsumerConfig(Map<?,?>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "configNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "configDef()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "main(String[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.svg" }

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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#499"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00499] For method postProcessParsedConfig arguments Map&lt;String ,Object &gt;  parsedValues"
}} 
,
{ "ligne" : {
   "c1" : "00499"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#499"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00499] For method postProcessParsedConfig list of called methods Object monObjet|java.util.Map&lt;String,Object&gt; CommonClientConfigs_postProcessReconnectBackoffConfigsN264563"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#506"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00506] For method maybeOverrideClientId arguments Map&lt;String ,Object &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#506"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00506] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00508] In method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#514"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00514] In method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#515"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00515] In method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String  'consumer-%s-%s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00520"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#520"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00520] For method appendDeserializerToConfig arguments Map&lt;String ,Object &gt;  configs|Deserializer&lt;? &gt;  keyDeserializer|Deserializer&lt;? &gt;  valueDeserializer"
}} 
,
{ "ligne" : {
   "c1" : "00525"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#525"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00525] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  'must be non-null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00529"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#529"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00529] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00531"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00532"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#532"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00532] In method org.apache.kafka.clients.consumer.ConsumerConfig.appendDeserializerToConfig@POLYN265826 the MagicNumber/String  'must be non-null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#536"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00536] For method maybeOverrideEnableAutoCommit list of called methods Object monObjet|boolean getBooleanN267183"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#541"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00541] In method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideEnableAutoCommit@POLYN266954 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideEnableAutoCommit@POLYN266954 the MagicNumber/String  ' cannot be set to true when default group id (null) is used.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#569"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00569] For method main arguments String[]  args"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.clients.consumer.ConsumerConfig.main@POLYN268485 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.clients.consumer.ConsumerConfig.main@POLYN268485 the MagicNumber/String  'consumerconfigs_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.ConsumerConfig.configDef@POLYN268364"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideEnableAutoCommit@POLYN266954"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00508] In the recursive method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00511"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#511"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00511] In the recursive method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00514] In the recursive method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String '' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00514"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#514"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00514] In the recursive method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00515"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#515"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00515] In the recursive method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideClientId@POLYN264743 the MagicNumber/String 'consumer-%s-%s' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#541"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00541] In the recursive method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideEnableAutoCommit@POLYN266954 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/ConsumerConfig.java.html#543"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00543] In the recursive method org.apache.kafka.clients.consumer.ConsumerConfig.maybeOverrideEnableAutoCommit@POLYN266954 the MagicNumber/String ' cannot be set to true when default group id -null- is used.' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
