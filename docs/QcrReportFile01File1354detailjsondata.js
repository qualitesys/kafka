console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java 13 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.metadata.FinalizedControllerFeatures"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.FinalizedControllerFeatures" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FinalizedControllerFeatures"
 , "c2" : "FinalizedControllerFeatures(Map<String,Short>;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Short>"
 , "c2" : "get(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "featureNames()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "epoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "6"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.svg" }

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
 , "c4" : "4"
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
 , "c4" : "5"
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
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class FinalizedControllerFeatures contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method get arguments String  name"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.metadata.FinalizedControllerFeatures.equals@POLYN166514 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String  '{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String  'featureMap=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String  ', epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String '{' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String 'featureMap=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String ', epoch=' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/FinalizedControllerFeatures.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.metadata.FinalizedControllerFeatures.toString@POLYN166925 the MagicNumber/String '}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
