console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.internals.MetadataOperationContext"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.internals.MetadataOperationContext" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#48"
 , "c1" : "MetadataOperationContext"
 , "c2" : "MetadataOperationContext(Collection&lt;String&gt;;O;long;Map&lt;TopicPartition,KafkaFutureImpl&lt;T&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#59"
 , "c1" : "void"
 , "c2" : "setResponse(Optional&lt;MetadataResponse&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#63"
 , "c1" : "Optional&lt;MetadataResponse&gt;"
 , "c2" : "response()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#67"
 , "c1" : "O"
 , "c2" : "options()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#71"
 , "c1" : "long"
 , "c2" : "deadline()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#75"
 , "c1" : "Map&lt;TopicPartition,KafkaFutureImpl&lt;T&gt;&gt;"
 , "c2" : "futures()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#79"
 , "c1" : "Collection&lt;String&gt;"
 , "c2" : "topics()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#83"
 , "c1" : "void"
 , "c2" : "handleMetadataErrors(MetadataResponse)"
 , "c3" : "4"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#93"
 , "c1" : "boolean"
 , "c2" : "shouldRefreshMetadata(Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method setResponse arguments Optional&lt;MetadataResponse &gt;  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method handleMetadataErrors arguments MetadataResponse  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#83"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00083] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00085] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method shouldRefreshMetadata arguments Errors  error"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#93"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00093] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00093] Public method shouldRefreshMetadata is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/internals/MetadataOperationContext.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
