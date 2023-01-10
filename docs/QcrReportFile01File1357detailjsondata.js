console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java 41 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.metadata.KafkaConfigSchema"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.KafkaConfigSchema" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#56"
 , "c1" : "ConfigEntry.ConfigType"
 , "c2" : "translateConfigType(ConfigDef.Type)"
 , "c3" : "10"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#99"
 , "c1" : "DescribeConfigsResponse.ConfigSource"
 , "c2" : "translateConfigSource(ConfigEntry.ConfigSource)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#109"
 , "c1" : "KafkaConfigSchema"
 , "c2" : "KafkaConfigSchema(Map<ConfigResource.Type,ConfigDef>;Map<String,List<ConfigSynonym>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#118"
 , "c1" : "boolean"
 , "c2" : "isSplittable(ConfigResource.Type;String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00130"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#130"
 , "c1" : "boolean"
 , "c2" : "isSensitive(ConfigRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#139"
 , "c1" : "boolean"
 , "c2" : "isSensitive(ConfigResource.Type;String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#150"
 , "c1" : "String"
 , "c2" : "getDefault(ConfigResource.Type;String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#160"
 , "c1" : "Map<String,ConfigEntry>"
 , "c2" : "resolveEffectiveTopicConfigs(Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00175"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#175"
 , "c1" : "ConfigEntry"
 , "c2" : "resolveEffectiveTopicConfig(ConfigDef.ConfigKey;Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>)"
 , "c3" : "8"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00208"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#208"
 , "c1" : "ConfigEntry"
 , "c2" : "toConfigEntry(ConfigDef.ConfigKey;Object;ConfigSource;Function<String,String>)"
 , "c3" : "7"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method translateConfigType arguments ConfigDef.Type  type"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00099] For method translateConfigSource arguments ConfigEntry.ConfigSource  configSource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.metadata.KafkaConfigSchema.translateConfigSource@POLYN185953 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00118] For method isSplittable arguments ConfigResource.Type  type|String  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN186855 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN186855 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN186855 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN186855 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#130"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00130] For method isSensitive arguments ConfigRecord  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method isSensitive arguments ConfigResource.Type  type|String  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00139] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN187942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN187942 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN187942 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN187942 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method getDefault arguments ConfigResource.Type  type|String  key"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN188584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN188584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN188584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN188584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#160"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00160] For method resolveEffectiveTopicConfigs arguments Map&lt;String ,?  extends Object &gt;  staticNodeConfig|Map&lt;String ,?  extends Object &gt;  dynamicClusterConfigs|Map&lt;String ,?  extends Object &gt;  dynamicNodeConfigs|Map&lt;String ,?  extends Object &gt;  dynamicTopicConfigs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00168] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#175"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00175] For method resolveEffectiveTopicConfig arguments ConfigDef.ConfigKey  configKey|Map&lt;String ,?  extends Object &gt;  staticNodeConfig|Map&lt;String ,?  extends Object &gt;  dynamicClusterConfigs|Map&lt;String ,?  extends Object &gt;  dynamicNodeConfigs|Map&lt;String ,?  extends Object &gt;  dynamicTopicConfigs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#175"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00175] The argument configKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#176"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00176] The argument staticNodeConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument dynamicClusterConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#178"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00178] The argument dynamicNodeConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#179"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00179] The argument dynamicTopicConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.metadata.KafkaConfigSchema.resolveEffectiveTopicConfig@POLYN190330 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method toConfigEntry arguments ConfigDef.ConfigKey  configKey|Object  value|ConfigSource  source|Function&lt;String ,String &gt;  converter"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#208"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00208] The argument configKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#211"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00211] The argument converter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN192593 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN192593 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN192593 the MagicNumber/String  'Unable to convert ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN192593 the MagicNumber/String  ' to string.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN192593 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN192593 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00056] Public method translateConfigType is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00130] Public method isSensitive is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
