console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/ClusterResource.java 8 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.ClusterResource"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.ClusterResource" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00013"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#13"
 , "c1" : "ClusterResource"
 , "c2" : "ClusterResource(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00018"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#18"
 , "c1" : "String"
 , "c2" : "clusterId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#23"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00028"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#28"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#36"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
 , "c1" : "00008"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class ClusterResource contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.common.ClusterResource.toString@POLYN146989 the MagicNumber/String  'ClusterResource(clusterId=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.common.ClusterResource.toString@POLYN146989 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#28"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00028] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00030] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.ClusterResource.equals@POLYN147137 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.ClusterResource.equals@POLYN147137 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.ClusterResource.equals@POLYN147137 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/ClusterResource.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
