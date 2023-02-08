console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java 8 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.util.TopicCreation"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.TopicCreation" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#45"
 , "c1" : "TopicCreation"
 , "c2" : "TopicCreation(boolean;TopicCreationGroup;Map&lt;String,TopicCreationGroup&gt;;Set&lt;String&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#55"
 , "c1" : "TopicCreation"
 , "c2" : "newTopicCreation(WorkerConfig;Map&lt;String,TopicCreationGroup&gt;)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#71"
 , "c1" : "TopicCreation"
 , "c2" : "empty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#82"
 , "c1" : "boolean"
 , "c2" : "isTopicCreationEnabled()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#92"
 , "c1" : "boolean"
 , "c2" : "isTopicCreationRequired(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#102"
 , "c1" : "TopicCreationGroup"
 , "c2" : "defaultTopicGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#115"
 , "c1" : "Map&lt;String,TopicCreationGroup&gt;"
 , "c2" : "topicGroups()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#127"
 , "c1" : "void"
 , "c2" : "addTopic(String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#142"
 , "c1" : "TopicCreationGroup"
 , "c2" : "findFirstGroup(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.svg" }

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
 , "c4" : "2"
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
 , "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method newTopicCreation arguments WorkerConfig  workerConfig|Map&lt;String ,TopicCreationGroup &gt;  topicGroups"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#55"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00055] The argument workerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.util.TopicCreation.newTopicCreation@POLYN165221 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.util.TopicCreation.newTopicCreation@POLYN165221 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#92"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00092] For method isTopicCreationRequired arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#127"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00127] For method addTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method findFirstGroup arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00071] Public method empty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
