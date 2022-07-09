console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java 101 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "AbstractConfig"
 , "c2" : "org.apache.kafka.connect.runtime.ConnectorConfig"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.ConnectorConfig" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "configDef()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef.CompositeValidator"
 , "c2" : "aliasValidator(String)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorConfig"
 , "c2" : "ConnectorConfig(Plugins)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorConfig"
 , "c2" : "ConnectorConfig(Plugins;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorConfig"
 , "c2" : "ConnectorConfig(Plugins;ConfigDef;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "get(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "errorRetryTimeout()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "errorMaxDelayInMillis()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ToleranceType"
 , "c2" : "errorToleranceType()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "enableErrorLog()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "includeRecordDetailsInErrorLog()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "enrich(Plugins;ConfigDef;Map<String,String>;boolean)"
 , "c3" : "4"
 , "c4" : "16"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "19"
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
 , "c4" : "62"
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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method get arguments String  key"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.connect.runtime.ConnectorConfig.configDef@POLYN245179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.connect.runtime.ConnectorConfig.configDef@POLYN245179 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.connect.runtime.ConnectorConfig.configDef@POLYN245179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.connect.runtime.ConnectorConfig.configDef@POLYN245179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.connect.runtime.ConnectorConfig.configDef@POLYN245179 the MagicNumber/String  'transformation' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.connect.runtime.ConnectorConfig.configDef@POLYN245179 the MagicNumber/String  'predicate' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#180"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00180] For method aliasValidator arguments String  kind"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.connect.runtime.ConnectorConfig.aliasValidator@POLYN249336 the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.connect.runtime.ConnectorConfig.aliasValidator@POLYN249336 the MagicNumber/String  'Duplicate alias provided.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.connect.runtime.ConnectorConfig.aliasValidator@POLYN249336 the MagicNumber/String  'unique ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.connect.runtime.ConnectorConfig.aliasValidator@POLYN249336 the MagicNumber/String  ' aliases' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.connect.runtime.ConnectorConfig.ConnectorConfig@POLYN250655 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method get arguments String  key"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#227"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00227] For method errorToleranceType list of called methods Object monObjet|String getStringN251579"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00251] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00255] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00256] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00257] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00258] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00261] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00263] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00269"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00269] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00261"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  'unchecked' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00265"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00265] In method org.apache.kafka.connect.runtime.ConnectorConfig the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#279"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00279] For method enrich arguments Plugins  plugins|ConfigDef  baseConfigDef|Map&lt;String ,String &gt;  props|boolean  requireFullConfig"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#279"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00279] The argument plugins is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#279"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00279] The argument props is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'Transformation' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'rawtypes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00293] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00294"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'The alias of a predicate used to determine whether to apply this transformation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00295"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#295"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00295] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'Whether the configured predicate should be negated.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'Transformer config {} is masked by implicit config of that name' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00308] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00310] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'Config '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  '' was provided ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'but there is no config '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00327] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  '' defining a predicate to be negated.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.connect.runtime.ConnectorConfig.enrich@POLYN254885 the MagicNumber/String  'Predicate' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00348"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00348] The class EnrichablePlugin contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#370"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00370] For method enrich arguments ConfigDef  newDef"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#370"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00370] For method enrich list of called methods Object monObjet|Object ConfigDef_parseTypeN259620"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#370"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00370] The argument newDef is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00378"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00378] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00382] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00382"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#382"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00382] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00383] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00384] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00387] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00388] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00389] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00389"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00389] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00391"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00391] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00399"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00399] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  'Item in ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00379"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  ' property is not of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00380"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00380] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  'type String' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00384"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  'type' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  'valid configs for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  'Class for the '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  '' ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00395"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  '.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00396"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  ' type for ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00400"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.enrich@POLYN259527 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00406"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#406"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00406] For method validateProps arguments String  prefix"
}} 
,
{ "ligne" : {
   "c1" : "00409"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#409"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00409] For method populateConfigDef arguments String  typeConfig"
}} 
,
{ "ligne" : {
   "c1" : "00419"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.populateConfigDef@POLYN262430 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00426"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#426"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00426] For method configDefsForClass arguments String  typeConfig"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00438] For method getConfigDefFromConfigProvidingClass arguments String  key|Class&lt;? &gt;  cls"
}} 
,
{ "ligne" : {
   "c1" : "00438"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#438"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00438] For method getConfigDefFromConfigProvidingClass list of called methods Object monObjet|boolean Utils_isBlankN265123|boolean configN265988"
}} 
,
{ "ligne" : {
   "c1" : "00439"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#439"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00439] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00440"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  'Not a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  ' is abstract and cannot be created.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  ' is abstract and cannot be created. Did you mean ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  '?' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  'Error getting config definition from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#458"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00458] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00461"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#461"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00461] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.getConfigDefFromConfigProvidingClass@POLYN263981 the MagicNumber/String  '%s.config() must return a ConfigDef that is not null.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00473"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#473"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00473] For method config arguments T  t"
}} 
,
{ "ligne" : {
   "c1" : "00479"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00479] The class ClassRecommender contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00482"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#482"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00482] For method validValues arguments String  name|Map&lt;String ,Object &gt;  parsedConfig"
}} 
,
{ "ligne" : {
   "c1" : "00491"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#491"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00491] For method visible arguments String  name|Map&lt;String ,Object &gt;  parsedConfig"
}} 
,
{ "ligne" : {
   "c1" : "00492"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/ConnectorConfig.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.connect.runtime.ConnectorConfig.EnrichablePlugin.ClassRecommender.visible@POLYN267362 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
