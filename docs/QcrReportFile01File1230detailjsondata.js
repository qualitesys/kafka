console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java 11 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Predicate<R>"
 , "c2" : "org.apache.kafka.connect.transforms.predicates.TopicNameMatches"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.predicates.TopicNameMatches" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#47"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#52"
 , "c1" : "boolean"
 , "c2" : "test(R)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#57"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#62"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#75"
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
   {

 "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.svg" }

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
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "1"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method test arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00053] The same method call pattern.matcher(record.topic()) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.test@POLYN162313 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.configure@POLYN162627 the MagicNumber/String  'entry must be a Java-compatible regular expression: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.toString@POLYN163383 the MagicNumber/String  'TopicNameMatches{' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.toString@POLYN163383 the MagicNumber/String  'pattern=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.transforms.predicates.TopicNameMatches.toString@POLYN163383 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00057] Valued method close is empty or contains only a return. Interface segregation for Predicate&lt;R&gt;"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00057] In the class TopicNameMatches which implements the interface(s) Predicate&lt;R&gt;, the method close is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedPredicate&lt;R&gt;"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/predicates/TopicNameMatches.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
