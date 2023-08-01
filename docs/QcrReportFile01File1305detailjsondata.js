console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java 100 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.controller.ConfigurationControlManager"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.controller.ConfigurationControlManager" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#132"
 , "c1" : "ConfigurationControlManager"
 , "c2" : "ConfigurationControlManager(LogContext;SnapshotRegistry;KafkaConfigSchema;Consumer&lt;ConfigResource&gt;;Optional&lt;AlterConfigPolicy&gt;;ConfigurationValidator;Map&lt;String,Object&gt;;int)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00151"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#151"
 , "c1" : "SnapshotRegistry"
 , "c2" : "snapshotRegistry()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00168"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#168"
 , "c1" : "ControllerResult&lt;Map&lt;ConfigResource,ApiError&gt;&gt;"
 , "c2" : "incrementalAlterConfigs(Map&lt;ConfigResource,Map&lt;String,Entry&lt;OpType,String&gt;&gt;&gt;;boolean)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00184"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#184"
 , "c1" : "void"
 , "c2" : "incrementalAlterConfigResource(ConfigResource;Map&lt;String,Entry&lt;OpType,String&gt;&gt;;boolean;List&lt;ApiMessageAndVersion&gt;;Map&lt;ConfigResource,ApiError&gt;)"
 , "c3" : "15"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00248"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#248"
 , "c1" : "ApiError"
 , "c2" : "validateAlterConfig(ConfigResource;List&lt;ApiMessageAndVersion&gt;;boolean)"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00287"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#287"
 , "c1" : "ControllerResult&lt;Map&lt;ConfigResource,ApiError&gt;&gt;"
 , "c2" : "legacyAlterConfigs(Map&lt;ConfigResource,Map&lt;String,String&gt;&gt;;boolean)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00304"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#304"
 , "c1" : "void"
 , "c2" : "legacyAlterConfigResource(ConfigResource;Map&lt;String,String&gt;;boolean;List&lt;ApiMessageAndVersion&gt;;Map&lt;ConfigResource,ApiError&gt;)"
 , "c3" : "7"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00344"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#344"
 , "c1" : "List&lt;String&gt;"
 , "c2" : "getParts(String;String;ConfigResource)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00366"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#366"
 , "c1" : "void"
 , "c2" : "replay(ConfigRecord)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00386"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#386"
 , "c1" : "Map&lt;String,String&gt;"
 , "c2" : "getConfigs(ConfigResource)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00395"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#395"
 , "c1" : "Map&lt;ConfigResource,ResultOrError&lt;Map&lt;String,String&gt;&gt;&gt;"
 , "c2" : "describeConfigs(long;Map&lt;ConfigResource,Collection&lt;String&gt;&gt;)"
 , "c3" : "8"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00432"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#432"
 , "c1" : "void"
 , "c2" : "deleteTopicConfigs(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00436"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#436"
 , "c1" : "boolean"
 , "c2" : "uncleanLeaderElectionEnabledForTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00440"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#440"
 , "c1" : "Map&lt;String,ConfigEntry&gt;"
 , "c2" : "computeEffectiveTopicConfigs(Map&lt;String,String&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00445"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#445"
 , "c1" : "Map&lt;String,String&gt;"
 , "c2" : "clusterConfig()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00450"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#450"
 , "c1" : "Map&lt;String,String&gt;"
 , "c2" : "currentControllerConfig()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00486"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#486"
 , "c1" : "ConfigurationControlIterator"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "14"
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
 , "c4" : "26"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "30"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "21"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method setLogContext arguments LogContext  logContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method setSnapshotRegistry arguments SnapshotRegistry  snapshotRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method setKafkaConfigSchema arguments KafkaConfigSchema  configSchema"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method setExistenceChecker arguments Consumer&lt;ConfigResource &gt;  existenceChecker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method setAlterConfigPolicy arguments Optional&lt;AlterConfigPolicy &gt;  alterConfigPolicy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00102] For method setValidator arguments ConfigurationValidator  validator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method setStaticConfig arguments Map&lt;String ,Object &gt;  staticConfig"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#112"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00112] For method setNodeId arguments int  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.controller.ConfigurationControlManager.Builder.build@POLYN235851 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.controller.ConfigurationControlManager.Builder.build@POLYN235851 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.controller.ConfigurationControlManager.ConfigurationControlManager@POLYN236402 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method incrementalAlterConfigs arguments Map&lt;ConfigResource ,Map&lt;String ,Entry&lt;OpType ,String &gt; &gt; &gt;  configChanges|boolean  newlyCreatedResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#169"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00169] The argument configChanges is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00184] For method incrementalAlterConfigResource arguments ConfigResource  configResource|Map&lt;String ,Entry&lt;OpType ,String &gt; &gt;  keysToOps|boolean  newlyCreatedResource|List&lt;ApiMessageAndVersion &gt;  outputRecords|Map&lt;ConfigResource ,ApiError &gt;  outputResults"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#184"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00184] For method incrementalAlterConfigResource list of called methods Object monObjet|java.util.List&lt;java.lang.String&gt; getPartsN241185|org.apache.kafka.common.requests.ApiError validateAlterConfigN242533"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#184"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00184] The argument configResource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#185"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00185] The argument keysToOps is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument outputRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#188"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00188] The argument outputResults is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00192] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00193] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00198] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00199] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00200] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00216] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00224] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  'Can't ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  ' to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  'key ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  ' because its type is not LIST.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN239049 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method validateAlterConfig arguments ConfigResource  configResource|List&lt;ApiMessageAndVersion &gt;  newRecords|boolean  newlyCreatedResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN242992 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN242992 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method legacyAlterConfigs arguments Map&lt;ConfigResource ,Map&lt;String ,String &gt; &gt;  newConfigs|boolean  newlyCreatedResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#288"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00288] The argument newConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method legacyAlterConfigResource arguments ConfigResource  configResource|Map&lt;String ,String &gt;  newConfigs|boolean  newlyCreatedResource|List&lt;ApiMessageAndVersion &gt;  outputRecords|Map&lt;ConfigResource ,ApiError &gt;  outputResults"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00304] For method legacyAlterConfigResource list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError validateAlterConfigN248139"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#304"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00304] The argument configResource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00305"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#305"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00305] The argument newConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#307"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00307] The argument outputRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00308"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#308"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00308] The argument outputResults is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00315"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00315] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00316"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00316] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00317] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.controller.ConfigurationControlManager.legacyAlterConfigResource@POLYN245982 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.controller.ConfigurationControlManager.legacyAlterConfigResource@POLYN245982 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#344"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00344] For method getParts arguments String  value|String  key|ConfigResource  configResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#344"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00344] For method getParts list of called methods Object monObjet|java.lang.String configSchema_getDefaultN248838|java.lang.String[] value_splitN249201"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#344"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00344] The argument configResource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.controller.ConfigurationControlManager.getParts@POLYN248619 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.controller.ConfigurationControlManager.getParts@POLYN248619 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.controller.ConfigurationControlManager.getParts@POLYN248619 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#366"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00366] For method replay arguments ConfigRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#366"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00366] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String  '{}: set configuration {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method getConfigs arguments ConfigResource  configResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00388"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.controller.ConfigurationControlManager.getConfigs@POLYN251057 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#395"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00395] For method describeConfigs arguments long  lastCommittedOffset|Map&lt;ConfigResource ,Collection&lt;String &gt; &gt;  resources"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#395"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00395] For method describeConfigs list of called methods Object monObjet|java.util.Set&lt;Entry&lt;K,V&gt;&gt; configs_entrySetN253129"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#396"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00396] The argument resources is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00399] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00402"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00402] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00406] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00407] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00410] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00412] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00415] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00419] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00420] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00415] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00420] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.controller.ConfigurationControlManager.describeConfigs@POLYN251628 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.controller.ConfigurationControlManager.describeConfigs@POLYN251628 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00432"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#432"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00432] For method deleteTopicConfigs arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00436"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#436"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00436] For method uncleanLeaderElectionEnabledForTopic arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.controller.ConfigurationControlManager.uncleanLeaderElectionEnabledForTopic@POLYN254298 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#440"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00440] For method computeEffectiveTopicConfigs arguments Map&lt;String ,String &gt;  creationConfigs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.controller.ConfigurationControlManager.clusterConfig@POLYN254746 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.controller.ConfigurationControlManager.currentControllerConfig@POLYN255107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#486"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00486] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#370"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00370] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#371"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00371] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00374] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#382"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00382] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN249612 the MagicNumber/String '{}: set configuration {} to {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
