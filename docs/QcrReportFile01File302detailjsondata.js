console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java 42 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.config.SaslConfigs"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.config.SaslConfigs" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addClientSaslSupport(ConfigDef)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.svg" }

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
 , "c4" : "19"
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
 , "c4" : "19"
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
   "c1" : "00006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class SaslConfigs contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method addClientSaslSupport arguments ConfigDef  config"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#178"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00178] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  0.25 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  900 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  3600 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 0.5 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 1.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 0.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 0.25 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 900 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00187] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00187] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String 3600 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00191] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#192"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00192] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00193] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00194] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00199] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00200] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#205"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00205] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00206] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN185570 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
