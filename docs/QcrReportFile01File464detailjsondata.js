console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/metrics/Quota.java 17 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.metrics.Quota"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.metrics.Quota" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00010"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#10"
 , "c1" : "Quota"
 , "c2" : "Quota(double;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#15"
 , "c1" : "Quota"
 , "c2" : "upperBound(double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#19"
 , "c1" : "Quota"
 , "c2" : "lowerBound(double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#23"
 , "c1" : "boolean"
 , "c2" : "isUpperBound()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#27"
 , "c1" : "double"
 , "c2" : "bound()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00031"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#31"
 , "c1" : "boolean"
 , "c2" : "acceptable(double)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#36"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#45"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#55"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00005"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#5"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00005] The class Quota contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method upperBound arguments double  upperBound"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.common.metrics.Quota.upperBound@POLYN147224 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method lowerBound arguments double  lowerBound"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.common.metrics.Quota.lowerBound@POLYN147399 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method acceptable arguments double  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.metrics.Quota.hashCode@POLYN148046 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.metrics.Quota.hashCode@POLYN148046 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.metrics.Quota.hashCode@POLYN148046 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.metrics.Quota.hashCode@POLYN148046 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.metrics.Quota.equals@POLYN148570 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.common.metrics.Quota.equals@POLYN148570 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.metrics.Quota.toString@POLYN149117 the MagicNumber/String  'upper=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.metrics.Quota.toString@POLYN149117 the MagicNumber/String  'lower=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#15"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00015] Public method upperBound is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/metrics/Quota.java.html#19"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00019] Public method lowerBound is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
