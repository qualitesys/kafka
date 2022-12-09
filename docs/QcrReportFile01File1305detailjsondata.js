console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java 99 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.xml" 
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
 , "c5" : "00117"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#117"
 , "c1" : "ConfigurationControlManager"
 , "c2" : "ConfigurationControlManager(LogContext;SnapshotRegistry;KafkaConfigSchema;Consumer<ConfigResource>;Optional<AlterConfigPolicy>;ConfigurationValidator;Map<String,Object>;int)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00136"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#136"
 , "c1" : "SnapshotRegistry"
 , "c2" : "snapshotRegistry()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00141"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#141"
 , "c1" : "ControllerResult<Map<ConfigResource,ApiError>>"
 , "c2" : "incrementalAlterConfigs(Map<ConfigResource,Map<String,Entry<OpType,String>>>;boolean)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#157"
 , "c1" : "void"
 , "c2" : "incrementalAlterConfigResource(ConfigResource;Map<String,Entry<OpType,String>>;boolean;List<ApiMessageAndVersion>;Map<ConfigResource,ApiError>)"
 , "c3" : "15"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00221"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#221"
 , "c1" : "ApiError"
 , "c2" : "validateAlterConfig(ConfigResource;List<ApiMessageAndVersion>;boolean)"
 , "c3" : "7"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00252"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#252"
 , "c1" : "ControllerResult<Map<ConfigResource,ApiError>>"
 , "c2" : "legacyAlterConfigs(Map<ConfigResource,Map<String,String>>;boolean)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00269"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#269"
 , "c1" : "void"
 , "c2" : "legacyAlterConfigResource(ConfigResource;Map<String,String>;boolean;List<ApiMessageAndVersion>;Map<ConfigResource,ApiError>)"
 , "c3" : "7"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00309"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#309"
 , "c1" : "List<String>"
 , "c2" : "getParts(String;String;ConfigResource)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00327"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#327"
 , "c1" : "void"
 , "c2" : "replay(ConfigRecord)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00347"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#347"
 , "c1" : "Map<String,String>"
 , "c2" : "getConfigs(ConfigResource)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00356"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#356"
 , "c1" : "Map<ConfigResource,ResultOrError<Map<String,String>>>"
 , "c2" : "describeConfigs(long;Map<ConfigResource,Collection<String>>)"
 , "c3" : "8"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00393"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#393"
 , "c1" : "void"
 , "c2" : "deleteTopicConfigs(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00397"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#397"
 , "c1" : "boolean"
 , "c2" : "uncleanLeaderElectionEnabledForTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00401"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#401"
 , "c1" : "Map<String,ConfigEntry>"
 , "c2" : "computeEffectiveTopicConfigs(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00406"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#406"
 , "c1" : "Map<String,String>"
 , "c2" : "clusterConfig()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00411"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#411"
 , "c1" : "Map<String,String>"
 , "c2" : "currentControllerConfig()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00447"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#447"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.svg" }

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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method setLogContext arguments LogContext  logContext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method setSnapshotRegistry arguments SnapshotRegistry  snapshotRegistry"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#72"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00072] For method setKafkaConfigSchema arguments KafkaConfigSchema  configSchema"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method setExistenceChecker arguments Consumer&lt;ConfigResource &gt;  existenceChecker"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method setAlterConfigPolicy arguments Optional&lt;AlterConfigPolicy &gt;  alterConfigPolicy"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00087] For method setValidator arguments ConfigurationValidator  validator"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method setStaticConfig arguments Map&lt;String ,Object &gt;  staticConfig"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method setNodeId arguments int  nodeId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.controller.ConfigurationControlManager.Builder.build@POLYN225953 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.controller.ConfigurationControlManager.Builder.build@POLYN225953 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#117"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00117] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.controller.ConfigurationControlManager.ConfigurationControlManager@POLYN226504 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method incrementalAlterConfigs arguments Map&lt;ConfigResource ,Map&lt;String ,Entry&lt;OpType ,String &gt; &gt; &gt;  configChanges|boolean  newlyCreatedResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument configChanges is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method incrementalAlterConfigResource arguments ConfigResource  configResource|Map&lt;String ,Entry&lt;OpType ,String &gt; &gt;  keysToOps|boolean  newlyCreatedResource|List&lt;ApiMessageAndVersion &gt;  outputRecords|Map&lt;ConfigResource ,ApiError &gt;  outputResults"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00157] For method incrementalAlterConfigResource list of called methods Object monObjet|java.util.List&lt;java.lang.String&gt; getPartsN231263|org.apache.kafka.common.requests.ApiError validateAlterConfigN232609"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#157"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00157] The argument configResource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#158"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00158] The argument keysToOps is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#160"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00160] The argument outputRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#161"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00161] The argument outputResults is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00164] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00165] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00170] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00171] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00172] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00173] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00189] Avoid declaring class instance within loop, performance impact"
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
 , "c1" : "00197"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00197] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  'Can't ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  ' to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  'key ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  ' because its type is not LIST.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.controller.ConfigurationControlManager.incrementalAlterConfigResource@POLYN229147 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method validateAlterConfig arguments ConfigResource  configResource|List&lt;ApiMessageAndVersion &gt;  newRecords|boolean  newlyCreatedResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00228] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233068 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#252"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00252] For method legacyAlterConfigs arguments Map&lt;ConfigResource ,Map&lt;String ,String &gt; &gt;  newConfigs|boolean  newlyCreatedResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#253"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00253] The argument newConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00269] For method legacyAlterConfigResource arguments ConfigResource  configResource|Map&lt;String ,String &gt;  newConfigs|boolean  newlyCreatedResource|List&lt;ApiMessageAndVersion &gt;  outputRecords|Map&lt;ConfigResource ,ApiError &gt;  outputResults"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#269"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00269] For method legacyAlterConfigResource list of called methods Object monObjet|org.apache.kafka.common.requests.ApiError validateAlterConfigN238193"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00269"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#269"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00269] The argument configResource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00270"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#270"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00270] The argument newConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#272"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00272] The argument outputRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00273"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#273"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00273] The argument outputResults is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00280] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00281] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#282"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00282] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.controller.ConfigurationControlManager.legacyAlterConfigResource@POLYN236048 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00297"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#297"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00297] In method org.apache.kafka.controller.ConfigurationControlManager.legacyAlterConfigResource@POLYN236048 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#309"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00309] For method getParts arguments String  value|String  key|ConfigResource  configResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#309"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00309] For method getParts list of called methods Object monObjet|java.lang.String[] value_splitN239251"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#309"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00309] The argument configResource is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00310"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.controller.ConfigurationControlManager.getParts@POLYN238673 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00314"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.controller.ConfigurationControlManager.getParts@POLYN238673 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.controller.ConfigurationControlManager.getParts@POLYN238673 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#327"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00327] For method replay arguments ConfigRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#327"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00327] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String  '{}: set configuration {} to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00347] For method getConfigs arguments ConfigResource  configResource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.controller.ConfigurationControlManager.getConfigs@POLYN241101 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#356"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00356] For method describeConfigs arguments long  lastCommittedOffset|Map&lt;ConfigResource ,Collection&lt;String &gt; &gt;  resources"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#357"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00357] The argument resources is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00360] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00363"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00363] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00367] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00368] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00371"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00371] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00373"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00373] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00376] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00380"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00380] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00376] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00381"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00381] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00370"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.controller.ConfigurationControlManager.describeConfigs@POLYN241670 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00382"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00382] In method org.apache.kafka.controller.ConfigurationControlManager.describeConfigs@POLYN241670 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#393"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00393] For method deleteTopicConfigs arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#397"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00397] For method uncleanLeaderElectionEnabledForTopic arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00398"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.controller.ConfigurationControlManager.uncleanLeaderElectionEnabledForTopic@POLYN244324 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#401"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00401] For method computeEffectiveTopicConfigs arguments Map&lt;String ,String &gt;  creationConfigs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.controller.ConfigurationControlManager.clusterConfig@POLYN244772 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.controller.ConfigurationControlManager.currentControllerConfig@POLYN245131 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00447"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#447"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00447] For method iterator arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#331"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00331] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#332"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00332] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#335"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00335] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.html#343"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00343] In the recursive method org.apache.kafka.controller.ConfigurationControlManager.replay@POLYN239662 the MagicNumber/String '{}: set configuration {} to {}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/controller/ConfigurationControlManager.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
