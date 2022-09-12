console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java 9 rule violations " 
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
 , "c5" : "00027"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#27"
 , "c1" : "TopicCreation"
 , "c2" : "TopicCreation(boolean;TopicCreationGroup;Map<String,TopicCreationGroup>;Set<String>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#37"
 , "c1" : "TopicCreation"
 , "c2" : "newTopicCreation(WorkerConfig;Map<String,TopicCreationGroup>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#48"
 , "c1" : "TopicCreation"
 , "c2" : "empty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#53"
 , "c1" : "boolean"
 , "c2" : "isTopicCreationEnabled()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#58"
 , "c1" : "boolean"
 , "c2" : "isTopicCreationRequired(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#63"
 , "c1" : "TopicCreationGroup"
 , "c2" : "defaultTopicGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#68"
 , "c1" : "Map<String,TopicCreationGroup>"
 , "c2" : "topicGroups()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#73"
 , "c1" : "void"
 , "c2" : "addTopic(String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#80"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
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
 , "c1" : "00017"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00017] The class TopicCreation contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method newTopicCreation arguments WorkerConfig  workerConfig|Map&lt;String ,TopicCreationGroup &gt;  topicGroups"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument workerConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.util.TopicCreation.newTopicCreation@POLYN163569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.util.TopicCreation.newTopicCreation@POLYN163569 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method isTopicCreationRequired arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method addTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method findFirstGroup arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/TopicCreation.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00048] Public method empty is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
