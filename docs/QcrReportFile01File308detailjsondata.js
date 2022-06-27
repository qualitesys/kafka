console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.config.internals.QuotaConfigs"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.config.internals.QuotaConfigs" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "buildUserClientQuotaConfigDef(ConfigDef)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isClientOrUserConfig(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "userConfigs()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "clientConfigs()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "ipConfigs()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class QuotaConfigs contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method buildUserClientQuotaConfigDef arguments ConfigDef  configDef"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html#36"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00036] The argument configDef is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method isClientOrUserConfig arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.config.internals.QuotaConfigs.userConfigs@POLYN171209 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.config.internals.QuotaConfigs.userConfigs@POLYN171209 the MagicNumber/String  'User credentials for SCRAM mechanism ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/internals/QuotaConfigs.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.config.internals.QuotaConfigs.ipConfigs@POLYN171990 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
