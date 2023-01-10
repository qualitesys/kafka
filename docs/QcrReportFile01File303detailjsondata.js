console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java 41 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.config.SaslConfigs"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.config.SaslConfigs" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#195"
 , "c1" : "void"
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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method addClientSaslSupport arguments ConfigDef  config"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#195"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00195] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  0.5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  1.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  0.0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  0.25 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  900 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  3600 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#209"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00209] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00196] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00201] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 0.5 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00201] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 1.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00202] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 0.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#202"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00202] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 0.25 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00203] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#203"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00203] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 900 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00204] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#204"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00204] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String 3600 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#206"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00206] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#207"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00207] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#208"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00208] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#209"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00209] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#210"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00210] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#211"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00211] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#217"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00217] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#222"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00222] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.html#223"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00223] In the recursive method org.apache.kafka.common.config.SaslConfigs.addClientSaslSupport@POLYN186952 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/config/SaslConfigs.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
