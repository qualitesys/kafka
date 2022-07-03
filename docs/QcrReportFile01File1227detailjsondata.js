console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java 10 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Predicate<R>"
 , "c2" : "org.apache.kafka.connect.transforms.predicates.RecordIsTombstone"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.predicates.RecordIsTombstone" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "test(R)"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
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
 , "c4" : "2"
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
   "c1" : "00010"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class RecordIsTombstone contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method test arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#21"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00021] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.connect.transforms.predicates.RecordIsTombstone.test@POLYN165934 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.connect.transforms.predicates.RecordIsTombstone.toString@POLYN166263 the MagicNumber/String  'RecordIsTombstone{}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00026] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00026] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00031] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/RecordIsTombstone.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00031] Void method configure is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
