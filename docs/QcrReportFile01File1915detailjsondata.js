console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java 10 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ProcessorNode<KIn,VIn,Void,Void>"
 , "c2" : ""
 , "c2" : "org.apache.kafka.streams.processor.internals.SinkNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.SinkNode" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#36"
 , "c1" : "SinkNode"
 , "c2" : "SinkNode(String;TopicNameExtractor&lt;KIn,VIn&gt;;Serializer&lt;KIn&gt;;Serializer&lt;VIn&gt;;StreamPartitioner&lt;?superKIn,?superVIn&gt;)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#53"
 , "c1" : "void"
 , "c2" : "addChild(ProcessorNode&lt;Void,Void,?,?&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#58"
 , "c1" : "void"
 , "c2" : "init(InternalProcessorContext&lt;Void,Void&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#66"
 , "c1" : "void"
 , "c2" : "process(Record&lt;KIn,VIn&gt;)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#102"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#110"
 , "c1" : "String"
 , "c2" : "toString(String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method addChild arguments ProcessorNode&lt;Void,Void,?,?&gt;  child"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.processor.internals.SinkNode.addChild@POLYN165971 the MagicNumber/String  'sink node does not allow addChild' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method init arguments InternalProcessorContext&lt;Void,Void&gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method process arguments Record&lt;KIn,VIn&gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00066] For method process list of called methods Object monObjet|long record_timestampN167160|java.lang.String topicExtractor_extractN167510"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.streams.processor.internals.SinkNode.toString@POLYN168000 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#110"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00110] For method toString arguments String  indent"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.streams.processor.internals.SinkNode.toString@POLYN168207 the MagicNumber/String  '\ttopic:\t\t' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.processor.internals.SinkNode.toString@POLYN168207 the MagicNumber/String  '\n' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
