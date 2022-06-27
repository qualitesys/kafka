console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java 9 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ProcessorNode<KIn,VIn,Void,Void>"
 , "c2" : "org.apache.kafka.streams.processor.internals.SinkNode"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.SinkNode" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SinkNode"
 , "c2" : "SinkNode(String;TopicNameExtractor<KIn,VIn>;Serializer<KIn>;Serializer<VIn>;StreamPartitioner<?superKIn,?superVIn>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addChild(ProcessorNode<Void,Void,?,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(InternalProcessorContext<Void,Void>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "process(Record<KIn,VIn>)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString(String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
   "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method addChild arguments ProcessorNode&lt;Void ,Void ,? ,? &gt;  child"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.processor.internals.SinkNode.addChild@POLYN174163 the MagicNumber/String  'sink node does not allow addChild' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method init arguments InternalProcessorContext&lt;Void ,Void &gt;  context"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#49"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00049] For method process arguments Record&lt;KIn ,VIn &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.SinkNode.toString@POLYN176180 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method toString arguments String  indent"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.processor.internals.SinkNode.toString@POLYN176387 the MagicNumber/String  '\ttopic:\t\t' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/SinkNode.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.processor.internals.SinkNode.toString@POLYN176387 the MagicNumber/String  '\n' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
