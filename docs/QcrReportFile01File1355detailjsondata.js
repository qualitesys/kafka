console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java 42 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.metadata.KafkaConfigSchema"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.KafkaConfigSchema" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConfigEntry.ConfigType"
 , "c2" : "translateConfigType(ConfigDef.Type)"
 , "c3" : "10"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "DescribeConfigsResponse.ConfigSource"
 , "c2" : "translateConfigSource(ConfigEntry.ConfigSource)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KafkaConfigSchema"
 , "c2" : "KafkaConfigSchema(Map<ConfigResource.Type,ConfigDef>;Map<String,List<ConfigSynonym>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isSplittable(ConfigResource.Type;String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isSensitive(ConfigRecord)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isSensitive(ConfigResource.Type;String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "getDefault(ConfigResource.Type;String)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,ConfigEntry>"
 , "c2" : "resolveEffectiveTopicConfigs(Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ConfigEntry"
 , "c2" : "resolveEffectiveTopicConfig(ConfigDef.ConfigKey;Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>;Map<String,?extendsObject>)"
 , "c3" : "8"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ConfigEntry"
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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "9"
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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class KafkaConfigSchema contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method translateConfigType arguments ConfigDef.Type  type"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method translateConfigSource arguments ConfigEntry.ConfigSource  configSource"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.metadata.KafkaConfigSchema.translateConfigSource@POLYN184271 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method isSplittable arguments ConfigResource.Type  type|String  key"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN185173 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN185173 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN185173 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.metadata.KafkaConfigSchema.isSplittable@POLYN185173 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method isSensitive arguments ConfigRecord  record"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method isSensitive arguments ConfigResource.Type  type|String  key"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument type is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN186260 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN186260 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN186260 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.metadata.KafkaConfigSchema.isSensitive@POLYN186260 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00107] For method getDefault arguments ConfigResource.Type  type|String  key"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN186902 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN186902 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN186902 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.metadata.KafkaConfigSchema.getDefault@POLYN186902 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#117"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00117] For method resolveEffectiveTopicConfigs arguments Map&lt;String ,?  extends Object &gt;  staticNodeConfig|Map&lt;String ,?  extends Object &gt;  dynamicClusterConfigs|Map&lt;String ,?  extends Object &gt;  dynamicNodeConfigs|Map&lt;String ,?  extends Object &gt;  dynamicTopicConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method resolveEffectiveTopicConfig arguments ConfigDef.ConfigKey  configKey|Map&lt;String ,?  extends Object &gt;  staticNodeConfig|Map&lt;String ,?  extends Object &gt;  dynamicClusterConfigs|Map&lt;String ,?  extends Object &gt;  dynamicNodeConfigs|Map&lt;String ,?  extends Object &gt;  dynamicTopicConfigs"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument configKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00133] The argument staticNodeConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#134"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00134] The argument dynamicClusterConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#135"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00135] The argument dynamicNodeConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#136"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00136] The argument dynamicTopicConfigs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.metadata.KafkaConfigSchema.resolveEffectiveTopicConfig@POLYN188648 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method toConfigEntry arguments ConfigDef.ConfigKey  configKey|Object  value|ConfigSource  source|Function&lt;String ,String &gt;  converter"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument configKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#168"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00168] The argument converter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN190911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN190911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN190911 the MagicNumber/String  'Unable to convert ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN190911 the MagicNumber/String  ' to string.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN190911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.metadata.KafkaConfigSchema.toConfigEntry@POLYN190911 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00030] Public method translateConfigType is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/KafkaConfigSchema.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00092] Public method isSensitive is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
