console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java 4 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.internals.ClusterResourceListeners"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.internals.ClusterResourceListeners" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#29"
 , "c1" : "ClusterResourceListeners"
 , "c2" : "ClusterResourceListeners()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#37"
 , "c1" : "void"
 , "c2" : "maybeAdd(Object)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#47"
 , "c1" : "void"
 , "c2" : "maybeAddAll(List&lt;?&gt;)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#57"
 , "c1" : "void"
 , "c2" : "onUpdate(ClusterResource)"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method maybeAdd arguments Object  candidate"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method maybeAddAll arguments List&lt;? &gt;  candidateList"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method onUpdate arguments ClusterResource  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00047] Public method maybeAddAll is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/internals/ClusterResourceListeners.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
