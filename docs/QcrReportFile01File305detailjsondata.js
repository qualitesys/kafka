console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java 28 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.config.SslConfigs"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.config.SslConfigs" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addClientSslSupport(ConfigDef)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.svg" }

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
 , "c4" : "12"
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
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class SslConfigs contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method addClientSslSupport arguments ConfigDef  config"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#116"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00116] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#118"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00118] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00125] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#126"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00126] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00129] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00134] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SslConfigs.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.common.config.SslConfigs.addClientSslSupport@POLYN194398 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
