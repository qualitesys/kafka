console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java 20 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "ConnectResource"
 , "c2" : "org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#87"
 , "c1" : "ConnectorPluginsResource"
 , "c2" : "ConnectorPluginsResource(Herder)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00109"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#109"
 , "c1" : "void"
 , "c2" : "requestTimeout(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#116"
 , "c1" : "ConfigInfos"
 , "c2" : "validateConfigs(String;Map&lt;String,String&gt;)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00147"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#147"
 , "c1" : "List&lt;PluginInfo&gt;"
 , "c2" : "listConnectorPlugins(boolean)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00164"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#164"
 , "c1" : "List&lt;ConfigKeyInfo&gt;"
 , "c2" : "getConnectorConfigDef(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00170"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#170"
 , "c1" : "String"
 , "c2" : "normalizedPluginName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
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
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#87"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00087] The argument herder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument plugins is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#101"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00101] The argument excludes is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#109"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00109] For method requestTimeout arguments long  requestTimeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method validateConfigs arguments String  pluginName|Map&lt;String ,String &gt;  connectorConfig"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#118"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00118] The argument connectorConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource.validateConfigs@POLYN184207 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource.validateConfigs@POLYN184207 the MagicNumber/String  'Included connector type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource.validateConfigs@POLYN184207 the MagicNumber/String  ' does not match request type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource.validateConfigs@POLYN184207 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource.validateConfigs@POLYN184207 the MagicNumber/String  'Request timed out' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource.validateConfigs@POLYN184207 the MagicNumber/String  'Request interrupted' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00147] For method listConnectorPlugins arguments boolean  connectorsOnly"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#150"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00150] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method getConnectorConfigDef arguments String  pluginName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#165"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00165] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#170"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00170] For method normalizedPluginName arguments String  pluginName"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#170"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00170] The argument pluginName is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00172] The same method call ALIAS_SUFFIX.length()pluginName.substring(0,pluginName.length()-ALIAS_SUFFIX.length()) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.connect.runtime.rest.resources.ConnectorPluginsResource.normalizedPluginName@POLYN186887 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/runtime/rest/resources/ConnectorPluginsResource.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
