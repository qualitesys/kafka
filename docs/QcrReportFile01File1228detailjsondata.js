console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java 12 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Predicate<R>"
 , "c2" : "org.apache.kafka.connect.transforms.predicates.TopicNameMatches"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.predicates.TopicNameMatches" , "link" : "" , "methodes" : [ 
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
 , "c4" : "6"
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
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
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
   "c1" : "00015"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class TopicNameMatches contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method test arguments R  record"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00035] The same method call pattern.matcher(record.topic()) is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.test@POLYN150349 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.configure@POLYN150663 the MagicNumber/String  'entry must be a Java-compatible regular expression: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.toString@POLYN151413 the MagicNumber/String  'TopicNameMatches{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.toString@POLYN151413 the MagicNumber/String  'pattern=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.toString@POLYN151413 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00039] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00039] Void method close is empty or contains only a return. Interface segregation"
}} 
]
};
console.log('leListeStr 99 main end');
