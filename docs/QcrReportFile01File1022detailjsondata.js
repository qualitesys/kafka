console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java 11 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "GroupFilter"
 , "c2" : "org.apache.kafka.connect.mirror.DefaultGroupFilter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.DefaultGroupFilter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "included(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "excluded(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "shouldReplicateGroup(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class DefaultGroupFilter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method configure arguments Map&lt;String ,? &gt;  props"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method included arguments String  group"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.connect.mirror.DefaultGroupFilter.included@POLYN151717 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method excluded arguments String  group"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.mirror.DefaultGroupFilter.excluded@POLYN151930 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method shouldReplicateGroup arguments String  group"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.mirror.DefaultGroupFilter.GroupFilterConfig.GroupFilterConfig@POLYN152955 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00037] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00037] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/DefaultGroupFilter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.DefaultGroupFilter.configure@POLYN151319"
}} 
]
};
console.log('leListeStr 99 main end');
